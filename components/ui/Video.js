import { useRef, useEffect } from 'react'

export default function Video({ 
  src, 
  title = "Video", 
  className = "",
  poster = null,
  controls = true,
  autoplay = true,
  muted = true,
  loop = true,
  pauseOnScroll = true,
  isYouTube = false,
  ...props 
}) {
  const videoRef = useRef(null)
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!pauseOnScroll) return

    const element = isYouTube ? iframeRef.current : videoRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isYouTube) {
            // For YouTube videos, try multiple approaches
            const iframe = entry.target
            try {
              // Add a small delay to ensure iframe is ready
              setTimeout(() => {
                if (entry.isIntersecting) {
                  // Try to play video using different methods
                  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                  // Alternative method
                  iframe.contentWindow.postMessage('{"event":"command","func":"play","args":""}', '*')
                } else {
                  // Try to pause video using different methods
                  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
                  // Alternative method
                  iframe.contentWindow.postMessage('{"event":"command","func":"pause","args":""}', '*')
                }
              }, 100)
            } catch (error) {
              // Silently handle YouTube control errors
            }
          } else {
            // For HTML5 videos
            const video = entry.target
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Silently handle video play errors
              })
            } else {
              video.pause()
            }
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px' // No margin for more precise detection
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [pauseOnScroll, isYouTube])

  // YouTube iframe
  if (isYouTube) {
    // Add autoplay, loop, and enablejsapi parameters to YouTube URL
    const videoId = src.match(/embed\/([^?]+)/)?.[1]
    const youtubeSrc = src.includes('?') 
      ? `${src}&autoplay=1&loop=1&playlist=${videoId}&enablejsapi=1`
      : `${src}?autoplay=1&loop=1&playlist=${videoId}&enablejsapi=1`
    
    return (
      <iframe 
        ref={iframeRef}
        src={youtubeSrc}
        className={`w-full h-full ${className}`}
        allowFullScreen
        title={title}
        allow="autoplay; encrypted-media"
        {...props}
      />
    )
  }

  // Native HTML5 video
  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      controls={controls}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      poster={poster}
      playsInline
      {...props}
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/webm" />
      <source src={src} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  )
}
