import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaChevronDown, FaFacebook } from 'react-icons/fa'

const getMainNavItems = () => [
  { name: 'Home', link: '/' },
  { 
    name: 'Our Feeds', 
    link: null, 
    isDropdown: true,
    children: [
      { name: 'Custom Dairy Feed', link: '/custom-dairy-feed' },
      { name: 'Calf Feed', link: '/calf-feed' },
      { name: 'Heifer Feed', link: '/heifer-feed' },
      { name: 'Transitional Feed', link: '/transitional-feed' },
      { name: 'Organic Feed', link: '/organic-feed' },
      { name: 'Beef Feed', link: '/beef-feed' },
      { name: 'Small Ruminants', link: '/small-ruminants' },
      { name: 'Horse Feed', link: '/horse-feed' },
      { name: 'Forage Inoculants', link: '/forage-inoculants' }
    ]
  },
  { name: 'Feed Mills', link: '/feed-mills' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/contact' }
]

const renderNavLink = (item, onClick = null, isDesktopDropdownOpen = false, toggleDesktopDropdown = null, closeDesktopDropdown = null) => {
  if (item.isDropdown) {
    return (
      <div key={item.name} className="relative dropdown-container">
        <button 
          className="flex items-center text-blue-800 hover:text-gray-700 transition-colors font-rubik uppercase"
          onClick={toggleDesktopDropdown}
        >
          {item.name}
          <FaChevronDown className={`ml-1 text-xs text-blue-800 transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <div className={`absolute top-full left-0 mt-6 w-64 bg-white shadow-lg border transition-all duration-200 z-50 ${isDesktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div>
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.link}
                className="block px-4 py-2 text-sm border-t border-gray-200 text-blue-800 hover:bg-blue-800 hover:text-white transition-colors"
                onClick={closeDesktopDropdown}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <Link 
      key={item.name}
      href={item.link} 
      className="text-blue-800 hover:text-gray-700 transition-colors font-rubik uppercase"
      onClick={onClick}
    >
      {item.name}
    </Link>
  )
}


export default function Header({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFeedsDropdownOpen, setIsFeedsDropdownOpen] = useState(false)
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
  
  const mainNavItems = getMainNavItems()
  
  const closeDesktopDropdown = () => {
    setIsDesktopDropdownOpen(false)
  }

  const toggleDesktopDropdown = () => {
    setIsDesktopDropdownOpen(!isDesktopDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDesktopDropdownOpen) {
        // Check if click is outside the dropdown container
        const dropdownContainer = document.querySelector('.dropdown-container')
        if (dropdownContainer && !dropdownContainer.contains(event.target)) {
          setIsDesktopDropdownOpen(false)
        }
      }
    }

    if (isDesktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDesktopDropdownOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md border-b-4 border-gray-400 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/img/Logo1.png" 
                alt="R&J Dairy Consulting Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Header */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavItems.map(item => renderNavLink(item, null, isDesktopDropdownOpen, toggleDesktopDropdown, closeDesktopDropdown))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Header */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              {mainNavItems.map(item => {
                if (item.isDropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        className="flex items-center justify-between w-full text-blue-800 hover:text-gray-700 font-rubik uppercase transition-colors"
                        onClick={() => setIsFeedsDropdownOpen(!isFeedsDropdownOpen)}
                      >
                        {item.name}
                        <FaChevronDown className={`text-xs transition-transform ${isFeedsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isFeedsDropdownOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child, index) => (
                            <Link
                              key={index}
                              href={child.link}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                
                return renderNavLink(item, () => setIsMobileMenuOpen(false))
              })}
              
              {/* Social Media */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://www.facebook.com/randjdairy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
