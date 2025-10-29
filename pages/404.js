import Layout from '@/layout/Layout'

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist."
    >
      <section className="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-blue-800 mb-8">404</h1>
            <p className="text-2xl text-gray-600 mb-8">
              Nope! Nothing here! You may want to try a menu item above.
            </p>
            <div className="space-x-4">
              <a 
                href="/" 
                className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go Home
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
