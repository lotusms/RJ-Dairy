import Layout from '@/layout/Layout'
import CallToAction from '@/components/ui/CallToAction'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'

const goatSheepFeeds = [
	"16% Goat Pellet w/ Rumensin",
	"16% Goat Max Pellet",
	"18% Goat Grower w/ Deccox",
	"20% Lamb Starter Creep w/ Bovatec",
	"18% Sheep w/ Bovatec",
	"16% Sheep w/ Bovatec",
	"FREE CHOICE Small Ruminant Mineral Pack"
]

export default function SmallRuminants() {
  return (
    <Layout
      title="Small Ruminants - R&J Dairy Consulting"
      description="Quality feeds for small ruminants."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/small-ruminants.jpg"
            alt="Small Ruminants"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="SMALL RUMINANTS" delay={200} />
            </h1>
          </div>
        </div>
      </section>

			<div className="py-16 mx-auto max-w-7xl px-4">
				<div className="mb-12">
					<p className="text-lg text-gray-600 leading-relaxed font-barlow">
						Our R&J Goat and Sheep feed line is specially formulated using the highest quality of minerals to ensure the best health and performance of the animal. All feeds can be customized to meet your farm goals.
					</p>
				</div>

				<div className="mb-12">
					<ProductCard
						title="R&J Goat & Sheep"
						buttonText=""
						middleContent={
							<div className="flex flex-col md:flex-row h-full w-full">
								<div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-white">
									<Image 
										src="/assets/img/R&J-Livestock-Consulting-Logo.png" 
										alt="R&J Livestock Consulting Logo" 
										width={650}
										height={650}
										className="w-full h-full object-contain"
										unoptimized
									/>
								</div>
								<div className="w-full md:w-1/2 flex flex-col p-6">
									<ul className="space-y-2 text-sm text-white/90 font-barlow">
										{goatSheepFeeds.map((feed, index) => (
											<li key={index} className="text-left border-b border-blue-300/30 p-2 px-4">{feed}</li>
										))}
									</ul>
								</div>
							</div>
						}
					/>
				</div>
				
				<CallToAction 
					message="Contact an R&J Dairy Consultant to review your Small Ruminants program"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
