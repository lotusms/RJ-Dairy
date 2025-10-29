import Layout from '@/layout/Layout'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/ui/CallToAction'
import BagDeliveryBanner from '@/components/ui/BagDeliveryBanner'

const calfFeeds = [
	{
		id: 1,
		title: "R&J Calf Starter — Golden Supreme",
		image: "/assets/img/feeds/Starter.JPG",
		alt: "R&J Calf Starter",
		specs: [
			"CP: 21%",
			"Feeding Rate: 6 – 8 lbs/day",
			"Feed type: Textured",
			"Available in bags, bulk, or totes"
		]
	},
	{
		id: 2,
		title: "R&J Calf Max 20%",
		image: "/assets/img/feeds/Calf_Pellet_calf_max_20.JPG",
		alt: "R&J Calf Max 20%",
		specs: [
			"CP: 20%",
			"Feeding Rate: 6 – 8 lbs/day",
			"Feed type: Al Pellet",
			"Available in 1/2 ton totes or bulk"
		]
	},
	{
		id: 3,
		title: "R&J Calf Grower",
		image: "/assets/img/feeds/grower.JPG",
		alt: "R&J Calf Grower",
		specs: [
			"CP: 18%",
			"Feeding Rate: 4 – 6 months of age, 4 – 6 lbs/day",
			"Feed type: Textured",
			"Available in bags, bulk, or totes"
		]
	},
	{
		id: 4,
		title: "R&J Calf Max 18%",
		image: "/assets/img/feeds/Calf_Max_Pellet_18.jpg",
		alt: "R&J Calf Max 18%",
		specs: [
			"CP: 18%",
			"Feeding Rate: 4 – 6 lbs/day",
			"Feed type: All Pellet",
			"Available in 1/2 ton totes or bulk"
		]
	}
]

export default function CalfFeed() {
  return (
    <Layout
      title="Calf Feed - R&J Dairy Consulting"
      description="Quality feeds to help build the future of your dairy farm."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/calffeed.png"
            alt="Calf Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="CALF FEED" delay={200} />
            </h1>
            <h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
              Quality feeds to help build the future of your dairy farm
            </h2>
          </div>
        </div>
      </section>      

      <div className="pt-16 pb-8 mx-auto max-w-7xl px-4">

				<div className="mb-12">
					<p className="text-lg text-gray-600 leading-relaxed text-center">
						All R&J calf feeds are formulated to provide the nutrition your calves need to get a healthy start. Extremely palatable, using only the best ingredients to improve digestion and improve immunity.
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
					{calfFeeds.map((feed) => (
						<ProductCard
							key={feed.id}
							title={feed.title}
							buttonText=""
							middleContent={
								<div className="flex flex-col items-start justify-start h-full w-full">
									<Image 
										src={feed.image} 
										alt={feed.alt}
										width={650}
										height={650}
										className="w-full h-72 sm:h-96 md:h-56 object-cover object-center overflow-hidden"
									/>
									
									<div className="flex-1 w-full">
										<ul className="text-sm text-white/90 font-barlow">
											{feed.specs.map((spec, index) => (
												<li key={index} className="text-left border-b border-blue-300/30 p-2 px-4">{spec}</li>
											))}
										</ul>
									</div>
								</div>
							}
						/>
					))}
				</div>
				
				<div className="text-center mb-12">
					<h3 className="text-3xl font-dosis tracking-wider text-gray-800">
						Contact us for more information on available milk replacers
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
					message="Custom calf feeds are available. Contact an R&J Consultant for more information"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
