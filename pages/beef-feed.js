import Layout from '@/layout/Layout'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/ui/CallToAction'

const beefFeeds = [
	{
		id: 1,
		title: "BEEF\nMINERAL",
		description: "Mineral packs for growing and finishing cattle. We have stock minerals or we can customize your own pack. Available in bulk, totes or bags."
	},
	{
		id: 2,
		title: "PROTEIN/COMPLETE\nFEEDS",
		description: "These feeds are formulated for energy or protein and customized for your farm goals. These mixes come directly from a feed mill and can be easily mixed on farm."
	},
	{
		id: 3,
		title: "CALF & CREEP\nFEEDS",
		description: "We have several options available for calf and creep feeds. Contact us for more information"
	},
	{
		id: 4,
		title: "SUPPLEMENTS\n",
		description: "A wide variety of supplement available used to improve efficiency, maximize performance and health of your growing or finishing cattle"
	}
]

export default function BeefFeed() {
  return (
    <Layout
      title="Beef Feed - R&J Dairy Consulting"
      description="Maximizing growth, improving animal health while using cost effective ingredients."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/beeffeed.jpg"
            alt="Beef Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="BEEF FEED" delay={200} />
            </h1>
          </div>
        </div>
      </section>

      <div className="py-16 mx-auto max-w-7xl px-4">				
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 items-center justify-center">
						<div className="md:col-span-1">
							<Image
								src="/assets/img/Logo.png" 
								alt="RJ Dairy Logo" 
								className="w-full max-w-xs mx-auto"
								width={650}
								height={650}
								unoptimized
							/>
						</div>
						<div className="md:col-span-3">
							<p className="text-lg text-gray-600 leading-relaxed font-barlow">
								Maximizing growth, improving animal health while using cost effective ingredients to increase farm profitability and efficiency. Whether you are raising 50 cattle as a hobby or have a large feed lot we have options for your needs.
							</p>
						</div>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
						{beefFeeds.map((feed) => (
							<ProductCard
								key={feed.id}
								title=""
								buttonText=""
								middleContent={
									<div className="flex flex-col items-start justify-start h-full w-full">
										<div className="text-center w-full bg-blue-950 text-white p-4 flex-shrink-0">
											<h3 className="text-xl uppercase font-dosis" dangerouslySetInnerHTML={{ __html: feed.title.replace(/\n/g, '<br/>') }} />
										</div>
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
						message="Contact an R&J Dairy Consultant to review your Beef Feed program"
						buttonText="Contact Us!"
						buttonHref="/contact"
					/>
				</div>
      </div>
    </Layout>
  )
}
