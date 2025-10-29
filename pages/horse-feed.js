import Layout from '@/layout/Layout'
import CallToAction from '@/components/ui/CallToAction'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'

const horseFeeds = [
	{
		id: 1,
		title: "R&J HORSE FEED",
		description: "A textured feed formulated for all horses. Highly palatable, 12% protein, and added vitamins and minerals to provide balanced nutrition to every horse."
	},
	{
		id: 2,
		title: "R&J LOW STARCH HORSE FEED",
		description: "A texturized feed formulated for high performance horses needing extra calories."
	}
]

export default function HorseFeed() {
  return (
    <Layout
      title="Horse Feed - R&J Dairy Consulting"
      description="Quality horse feeds for your equine needs."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/horseBanner.png"
            alt="Horse Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="HORSE FEED" delay={200} />
            </h1>
            <h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
              Formulated to provide the energy and nutrients your horses need!
            </h2>
          </div>
        </div>
      </section>

      <div className="py-16 mx-auto max-w-7xl px-4">
				<div className="mb-12">
					<p className="text-lg text-gray-600 leading-relaxed text-center font-barlow">
						Quality horse feeds are available. Contact us for more information about our equine nutrition solutions.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{horseFeeds.map((feed) => (
						<ProductCard
							key={feed.id}
							title={feed.title}
							buttonText=""
							middleContent={
								<div className="flex flex-col items-start justify-start h-full w-full">
									<div className="flex-1 w-full px-4 py-4">
										<p className="text-sm text-white/90 font-barlow">
											{feed.description}
										</p>
									</div>
								</div>
							}
						/>
					))}
				</div>
				
				<CallToAction 
					message="Contact an R&J Dairy Consultant to review your Horse Feed program"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
