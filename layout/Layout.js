import Head from 'next/head'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children, title, description }) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="194x194" href="/assets/img/favicon/favicon-194x194.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#1825aa" />
        <link rel="shortcut icon" href="/assets/img/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/img/favicon/mstile-144x144.png" />
        <meta name="msapplication-config" content="/assets/img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Page Title and Description */}
        <title>{title || 'R&J Dairy Consulting'}</title>
        <meta name="description" content={description || 'R&J Dairy Consulting - Working alongside of you to help achieve your farm goals!'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="http://www.rjdairy.com/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://www.rjdairy.com/assets/img/logo155.png" />
        <meta property="og:title" content={title || 'R&J Dairy Consulting'} />
        <meta property="og:url" content="http://www.rjdairy.com/" />
        <meta property="og:site_name" content="R&J Dairy" />
        <meta property="og:description" content={description || 'R&J Dairy Consulting - Working alongside of you to help achieve your farm goals!'} />
      </Head>

      {/* reCAPTCHA Enterprise Script */}
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      
      <div className="min-h-screen">
        <Header />
        <div className="mt-80">
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
