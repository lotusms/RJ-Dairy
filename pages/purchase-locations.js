import Layout from '@/layout/Layout'

export default function PurchaseLocations() {
  return (
    <Layout
      title="Purchase Locations - R&J Dairy Consulting"
      description="Find locations where you can purchase R&J Dairy Consulting products."
    >
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Purchase Locations</h1>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Find locations where you can purchase R&J Dairy Consulting products and services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Sample locations - you can replace with actual data */}
                <div className="bg-blue-800 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Lancaster County</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> 123 Farm Road, Lancaster, PA 17601</p>
                    <p><strong>Phone:</strong> (717) 555-0123</p>
                    <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
                  </div>
                </div>
                
                <div className="bg-blue-800 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">York County</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> 456 Dairy Lane, York, PA 17401</p>
                    <p><strong>Phone:</strong> (717) 555-0456</p>
                    <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
                  </div>
                </div>
                
                <div className="bg-blue-800 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Chester County</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> 789 Feed Street, Chester, PA 19380</p>
                    <p><strong>Phone:</strong> (610) 555-0789</p>
                    <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  Don't see a location near you? Contact us to find the nearest distributor or to discuss delivery options.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
