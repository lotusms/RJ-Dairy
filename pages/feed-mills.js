import Layout from '@/layout/Layout'
import { useState, useEffect } from 'react'
import PrimaryButton from '@/components/ui/PrimaryButton'
import ProductCard from '@/components/ui/ProductCard'
import PageTitle from '@/components/ui/PageTitle'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'

const formatAddress = (address) => {
	return address.split('\n').map(line => line.trim()).join('\n')
}

const formatPhone = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

const formatWebsite = (website) => {
  return website.replace('http://', '').replace('https://', '').replace('www.', '')
}	

const formatEmail = (email) => {
  return email.replace('@', ' at ').replace('.', ' dot ')
}

export default function FeedMills() {
  const [mills, setMills] = useState([])

  useEffect(() => {
    async function loadMills() {
      try {
        const response = await fetch('/data/mills.json')
        const millsData = await response.json()
        setMills(millsData)
      } catch (error) {
        console.error('Error loading mills:', error)
      }
    }
    loadMills()
  }, [])

  return (
    <Layout
      title="Feed Mills - R&J Dairy Consulting"
      description="R&J Dairy Consulting works with high quality, local feed mills to help service you better."
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <PageTitle title="Feed Mills" />
          
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6 font-barlow">
              R&J Dairy Consulting is an independent consulting company that works with your local mill. Working with local mills gives us the ability to have access to a wide variety of ingredients and provide more options to the farmer. We also have access to NON-GMO and organic ingredients.
              <br/><br/>
              Contact us today for a FREE ration and see the difference in working with an R&J Consultant.
            </p>          
          </div>
					<div className="text-center">
						<p className="text-gray-900 leading-relaxed mb-6 font-dosis text-3xl">
							We work with high quality, local feed mills to help service you better. Contact us for more information
						</p>
						<PrimaryButton href="/contact">
							<FaEnvelope className="mr-2" />
							Contact Us
						</PrimaryButton>
					</div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mills.map((mill, index) => (
              <ProductCard
                key={index}
                title={mill.name}
                link={`mailto:${mill.email}`}
                buttonText=""
                isExternal={false}
                middleContent={
                  <div className="flex flex-col items-start justify-start h-full w-full">
                    <Image 
                      src={`/assets/img/mills/${mill.image}`}
                      alt={mill.name}
                      width={650}
                      height={650}
                      className="w-full h-72 sm:h-96 md:h-56 object-cover object-center overflow-hidden"
                    />
                    
                    <div className="flex-1 *:px-4 *:py-2 space-y-3 w-full">
                      <div className="flex items-center justify-start border-b border-blue-400/30 pb-2">
                        <FaMapMarkerAlt className="text-white/70 mr-3 mt-1 flex-shrink-0" />
                        <address className="text-sm font-barlow text-white/80 leading-relaxed whitespace-pre-line text-left">
                          {formatAddress(mill.address)}
                        </address>
                      </div>
                      
                      {mill.phone !== 'n/a' && (
                        <div className="flex items-center border-b border-blue-400/30 pb-2">
                          <FaPhone className="text-white/70 mr-3 flex-shrink-0" />
                          <a 
                            href={`tel:${mill.phone}`} 
                            className="text-sm hover:text-blue-200 transition-colors text-left font-barlow text-white/80"
                          >
                            {formatPhone(mill.phone)}
                          </a>
                        </div>
                      )}
                      
                      {mill.website !== 'n/a' && (
                        <div className="flex items-center border-b border-blue-400/30 pb-2">
                          <FaGlobe className="text-white/70 mr-3 flex-shrink-0" />
                          <a 
                            href={mill.website.startsWith('http') ? mill.website : `https://${mill.website}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm hover:text-blue-200 transition-colors text-left font-barlow text-white/80"
                          >
                            {formatWebsite(mill.website)}
                          </a>
                        </div>
                      )}
                      
                      {mill.email !== 'n/a' && (
                        <div className="flex items-center">
                          <FaEnvelope className="text-white/70 mr-3 flex-shrink-0" />
                          <a 
                            href={`mailto:${mill.email}`} 
                            className="text-sm hover:text-blue-200 transition-colors text-left font-barlow text-white/80"
                          >
                            {mill.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                }
                onButtonClick={() => window.open(`mailto:${mill.email}`, '_blank')}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
