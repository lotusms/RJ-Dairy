import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <nav className="flex items-center justify-center gap-4 font-dosis uppercase">
              <div>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </div>
              <div>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <a 
                  href="mailto:info@lotusmarketingsolutions.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tech Support
                </a>
              </div>
            </nav>
          </div>
          
          <div>
            <nav className="flex items-center justify-center gap-4 font-dosis uppercase">              
              <div>
                <a 
                  href="tel:717-203-6777" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  717-203-6777
                </a>
              </div>
              <div>
                <a 
                  href="mailto:sales@rjdairy.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  sales@rjdairy.com
                </a>
              </div>
              <div>
                <a 
                  href="https://www.facebook.com/randjdairy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2"><FaFacebook /></span>
                  Like Us!
                </a>
              </div>
            </nav>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-sm text-gray-400 font-dosis ">
            <div>
              Designed by{' '}
              <a 
                href="https://www.lotusmarketingsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LOTUS Marketing Solutions LLC
              </a>
            </div>
            <div>
              All Rights Reserved. R&J Dairy®
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
