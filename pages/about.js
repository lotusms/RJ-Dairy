import Layout from '@/layout/Layout'
import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle'
import Image from 'next/image'

export default function About() {
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
      title="About R&J Dairy Consulting"
      description="Learn about R&J Dairy Consulting - Working alongside of you to help achieve your farm goals!"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="max-w-7xl mx-auto px-4">
          <PageTitle title="About R&J Dairy Consulting" />
          <div className="font-barlow text-gray-600 leading-relaxed">
            <p className="leading-relaxed mb-6">
              R&J Dairy Consulting was started in 2006 by Rick Stehr, with the idea that dairy feed needed to be restructured to maximize nutrition and health for dairy herds at a price that was reasonable for the farmer. With this plan in mind R&J Dairy has stood by its owner's philosophy of making lives better on the family farm by providing a quality product at a competitive price.
            <br/><br/>
              The goal for R&J Dairy Consultants is to provide a well-balanced, customized feeding plan for your dairy herd that will enhance good breeding, improve production, and save money. Our staff works directly with the farmer in order to provide the most accurate analysis of the farm's current resources and the available feeding plans that can be formulated.
            <br/><br/>
              Our consultants having experienced farm life — either by living or working on the family farm understand many of the challenges faced in the agricultural community. Our small business structure allows us to remain passionate about what we do, but most of all, we care about our customers. We love what we do, and we love doing it well. It is our slogan! — <strong>"A Better Way of Doing Business"</strong>.
            </p>
          </div>
        </section>

        <section className="pt-12">
          <PageTitle title="Meet The Staff" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto gap-y-36 mt-36">
            {staff.map((member, index) => (
              <div key={index} className="flex flex-col items-center h-full relative">
                {/* Circular Photo */}
                <div 
                  className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10 w-48 h-48 rounded-full bg-yellow-400 bg-cover bg-center mb-4 border-8 border-white flex-shrink-0"
                  style={{ backgroundImage: `url(/assets/img/about/${member.image})` }}
                ></div>
                
                {/* Dark Blue Text Block */}
                <div className="bg-blue-900 border-b-8 border-blue-950 text-white p-6 w-full text-center flex-1 flex flex-col justify-center relative pt-28">
                  <h3 className="text-xl font-helvetica font-thin mb-2">{member.name}</h3>
                  <div 
                    className="text-sm mb-4 font-helvetica uppercase font-thin"
                    dangerouslySetInnerHTML={{ 
                      __html: Array.isArray(member.position) 
                        ? member.position.join('<br/>') 
                        : member.position 
                    }}
                  />
                  <blockquote className="text-sm italic leading-relaxed tracking-wider font-helvetica font-thin">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 border-t border-gray-200 my-12"/>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <Image 
              src="/assets/img/about/vision2.png"
              alt="vision statement"
              width={512}
              height={512}
              className="size-56 mx-auto mb-6 rounded-full object-contain border-4 border-yellow-500"
            />
            <h3 className="text-3xl text-blue-900 font-dosis mb-4">Our Vision</h3>
            <p className="text-gray-600 font-barlow leading-relaxed">
              To be the most trusted and leading dairy nutrition company. To provide more options to dairy farmers so they thrive and are profitable.
            </p>
          </div>
          
          <div className="text-center">
            <Image 
              src="/assets/img/about/mission.png" 
              alt="mission statement" 
              width={512}
              height={512}
              className="size-56 mx-auto mb-6 rounded-full object-contain border-4 border-yellow-500"
            />
            <h3 className="text-3xl text-blue-900 font-dosis mb-4">Our Mission</h3>
            <p className="text-gray-600 font-barlow leading-relaxed">
              To inspire farmers to achieve their goals while offering the best service and custom formulations on the market. To provide service selflessly and help local dairies produce the highest quality milk available in the dairy industry.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}