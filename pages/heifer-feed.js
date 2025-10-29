import Layout from '@/layout/Layout'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import BagDeliveryBanner from '@/components/ui/BagDeliveryBanner'
import CallToAction from '@/components/ui/CallToAction'
import ProductCard from '@/components/ui/ProductCard'

export default function HeiferFeed() {
  return (
    <Layout
      title="Heifer Feed - R&J Dairy Consulting"
      description="Quality feeds to help build the future of your dairy farm."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/heiferfeed.jpg"
            alt="Heifer Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="HEIFER FEED" delay={200} />
            </h1>
            <h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
              Quality feeds to help build the future of your dairy farm
            </h2>
          </div>
        </div>
      </section>      

      <div className="py-16 mx-auto max-w-7xl px-4">        
				<div className="mb-12">
					<p className="text-lg text-gray-600 leading-relaxed text-center">
					All R&J heifer feeds and minerals are formulated to provide the nutrition your heifers need so they can grow, be breed and become productive and efficient lactating cows.
					</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<ProductCard
						title="R&J Developer"
						buttonText=""
						middleContent={
							<div className="flex flex-col items-start justify-start h-full w-full">
								<Image 
									src="/assets/img/feeds/developer.JPG" 
									alt="R&J Developer"
									width={650}
									height={650}
									className="w-full h-72 sm:h-96 md:h-56 object-cover object-center overflow-hidden"
								/>
								
								<div className="flex-1 w-full">
									<ul className="text-sm text-white/90 font-barlow">
										<li className="text-left border-b border-blue-300/30 p-2 px-4">CP: 30%</li>
										<li className="text-left border-b border-blue-300/30 p-2 px-4">Feeding Rate: 6 months up, 1 lbs/day</li>
										<li className="text-left border-b border-blue-300/30 p-2 px-4">Feed type: Pellet</li>
									</ul>
								</div>
							</div>
						}
					/>
					<ProductCard
						title="R&J Heifer Mineral"
						buttonText=""
						middleContent={
							<div className="flex flex-col items-start justify-start h-full w-full">
								<div className="flex-1 w-full">
									<ul className="text-sm text-white/90 font-barlow">
										<li className="text-left border-b border-blue-300/30 p-2 px-4">Feeding Rate: 4 oz/day</li>
										<li className="text-left border-b border-blue-300/30 p-2 px-4">Feed type: Mineral</li>
									</ul>
								</div>
							</div>
						}
					/>
        </div>
        
        <div className="text-center mb-12">
					<h3 className="text-3xl font-dosis tracking-wider text-gray-800">
            All heifer feeds are available in bags, or 1 ton totes/ bulk.
					</h3>
        </div>  
      </div>

			<BagDeliveryBanner 
				image="/assets/img/feeds/RJ-Bagged.jpg"
				alt="Custom Calf Feed Bags"
				message="Weekly bag delivery is available - 10 bag minimum (mix & match)"
			/>

			<div className="pb-16 pt-8 mx-auto max-w-7xl px-4">
				<CallToAction 
					message="Custom heifer feeds are available. Contact an R&J Consultant for more information"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
