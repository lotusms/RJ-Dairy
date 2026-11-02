import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const PORT = process.env.PORT || '3002'
const HOST = process.env.HOST || 'localhost'
const URL = `http://${HOST}:${PORT}`
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function openOrRefreshBrowser(targetUrl) {
  if (process.platform === 'darwin') {
    const script = `
      set targetURL to "${targetUrl}"
      set found to false
      if application "Google Chrome" is running then
        tell application "Google Chrome"
          repeat with w in windows
            set i to 1
            repeat with t in tabs of w
              if (URL of t) starts with targetURL then
                set index of w to 1
                set active tab index of w to i
                reload t
                activate
                set found to true
                exit repeat
              end if
              set i to i + 1
            end repeat
            if found then exit repeat
          end repeat
          if not found then
            if (count of windows) is 0 then make new window
            tell window 1 to make new tab with properties {URL:targetURL}
            activate
          end if
        end tell
        return
      end if
      if application "Safari" is running then
        tell application "Safari"
          repeat with w in windows
            repeat with t in tabs of w
              if (URL of t) starts with targetURL then
                set current tab of w to t
                tell t to do JavaScript "location.reload()" in document 1
                activate
                return
              end if
            end repeat
          end repeat
          if (count of windows) is 0 then
            make new document with properties {URL:targetURL}
          else
            tell window 1
              set current tab to (make new tab with properties {URL:targetURL})
            end tell
          end if
          activate
        end tell
        return
      end if
      do shell script "open " & quoted form of targetURL
    `
    spawn('osascript', ['-e', script], { stdio: 'ignore', detached: true }).unref()
    return
  }

  const command =
    process.platform === 'win32'
      ? `start "" "${targetUrl}"`
      : process.platform === 'linux'
        ? `xdg-open "${targetUrl}"`
        : `open "${targetUrl}"`

  spawn(command, { shell: true, stdio: 'ignore', detached: true }).unref()
}

async function waitForServer(url, maxAttempts = 120) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: 'manual' })
      if (response.ok || response.status === 307 || response.status === 308) {
        return true
      }
    } catch {
      // Server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  return false
}

let opened = false

async function tryOpenBrowser() {
  if (opened) return
  const ready = await waitForServer(URL, 1)
  if (!ready) return
  opened = true
  openOrRefreshBrowser(URL)
}

const nextDev = spawn(
  'pnpm',
  ['exec', 'next', 'dev', '-p', PORT, '-H', HOST],
  {
    cwd: ROOT,
    stdio: 'inherit',
    env: { ...process.env, BROWSER: 'none' },
  }
)

const pollInterval = setInterval(() => {
  tryOpenBrowser().catch(() => {})
}, 500)

nextDev.on('exit', (code) => {
  clearInterval(pollInterval)
  process.exit(code ?? 0)
})

process.on('SIGINT', () => {
  clearInterval(pollInterval)
  nextDev.kill('SIGINT')
})

process.on('SIGTERM', () => {
  clearInterval(pollInterval)
  nextDev.kill('SIGTERM')
})
