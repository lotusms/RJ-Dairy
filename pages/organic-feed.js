import Layout from '@/layout/Layout'
import CallToAction from '@/components/ui/CallToAction'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'

export default function OrganicFeed() {
  return (
    <Layout
      title="Organic Feed - R&J Dairy Consulting"
      description="Organic minerals and other organic feeds are available."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/OrganicBanner.png"
            alt="Organic Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="ORGANIC FEED" delay={200} />
            </h1>
          </div>
        </div>
      </section>     

      <div className="py-16 mx-auto max-w-7xl px-4">
        
        <div className="text-center mb-12">
					<p className="text-3xl text-gray-600 leading-relaxed font-dosis">
            Organic minerals and other organic feeds are available.
					</p>
        </div>  
        
				
				<CallToAction 
					message="Contact an R&J Dairy Consultant to review your Organic Feed program"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
