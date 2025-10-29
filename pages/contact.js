import Layout from '@/layout/Layout'
import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle'
import ProductCard from '@/components/ui/ProductCard'
import ContactForm from '@/components/forms/ContactForm'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function Contact() {
  const [staff, setStaff] = useState([])

  useEffect(() => {
    async function loadStaff() {
      try {
        const response = await fetch('/data/staff.json')
        const staffData = await response.json()
        setStaff(staffData)
      } catch (error) {
        console.error('Error loading staff:', error)
      }
    }
    loadStaff()
  }, [])


  return (
    <Layout
      title="Contact R&J Dairy Consulting"
      description="Contact R&J Dairy Consulting - Our relationship with you is extremely important to us."
    >
      {/* Banner Section */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/contact-us.jpg"
            alt="Contact us image"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <PageTitle title="Contact Us" className="text-center"  />
          <p className="text-gray-600 text-center font-barlow">
            Our relationship with you is extremely important to us. We are always open to suggestions, feedback, or questions. Please submit this form and we will get back to you.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Staff Contact Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {staff.map((member, index) => (
                  <ProductCard
                    key={index}
                    title={member.name}
                    link={`mailto:${member.email}`}
                    buttonText=""
                    isExternal={false}
                    middleContent={
                      <div className="flex flex-col items-start justify-start h-full w-full">
                        <div className="flex-1 *:px-4 *:py-2 space-y-3 w-full">
                          <div className="flex items-center justify-start border-b border-blue-400/30 pb-2">
                            <FaPhone className="text-white/70 mr-3 mt-1 flex-shrink-0" />
                            <a 
                              href={`tel:${member.phone}`} 
                              className="text-sm hover:text-blue-200 transition-colors text-left font-barlow text-white/80"
                            >
                              {member.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center">
                            <FaEnvelope className="text-white/70 mr-3 flex-shrink-0" />
                            <a 
                              href={`mailto:${member.email}`} 
                              className="text-sm hover:text-blue-200 transition-colors text-left font-barlow text-white/80"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    }
                    onButtonClick={() => window.open(`mailto:${member.email}`, '_blank')}
                  />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}