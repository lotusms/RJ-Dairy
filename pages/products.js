import Link from 'next/link'
import Layout from '@/layout/Layout'
import { useState, useEffect } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/data/products.json')
        const productsData = await response.json()
        setProducts(productsData)
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }
    loadProducts()
  }, [])

  return (
    <Layout 
      title="Products - R&J Dairy Consulting" 
      description="Explore R&J Dairy Consulting's comprehensive range of feed products and solutions"
    >
        {/* Banner Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
            <p className="text-xl mt-4">Comprehensive feed solutions for your dairy operation</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={`/assets/img/featured/${product.image}`} 
                      alt={product.name}
                      className="mx-auto max-w-40 h-40 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">
                    {getProductDescription(product.name)}
                  </p>
                  <Link 
                    href={`/${product.link.replace('.php', '')}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose R&J Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥛</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Nutrition</h3>
                <p className="text-gray-600">Formulated for optimal dairy cow health and production</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Local Mills</h3>
                <p className="text-gray-600">Sourced from trusted local feed mills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Formulations</h3>
                <p className="text-gray-600">Tailored to your specific farm needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">Professional consultation and technical support</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact our team to discuss your specific feeding needs and get a customized solution.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Our Consultants
            </Link>
          </div>
        </div>
    </Layout>
  )
}

function getProductDescription(productName) {
  const descriptions = {
    'Custom Dairy Feed': 'Tailored nutrition solutions designed specifically for your dairy operation\'s unique requirements.',
    'Calf Feed': 'Specialized nutrition for growing calves to ensure healthy development and strong immune systems.',
    'Heifer Feed': 'Balanced nutrition for developing heifers to support optimal growth and future milk production.',
    'Transitional Feed': 'Carefully formulated feeds to help cows transition smoothly through different production phases.',
    'Organic Feed': 'Certified organic feed options for sustainable farming practices and premium milk production.',
    'Beef Feed': 'High-quality nutrition solutions for beef cattle operations.',
    'Horse Feed': 'Specialized equine nutrition for horses and other equine animals.',
    'Innoculants': 'High-quality inoculants for improved forage preservation and feed quality.',
    'Small Ruminants': 'Nutritional solutions for sheep, goats, and other small ruminant animals.'
  }
  return descriptions[productName] || 'Quality feed solution for your livestock operation.'
}
