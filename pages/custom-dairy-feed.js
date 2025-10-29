import Layout from '@/layout/Layout'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import CallToAction from '@/components/ui/CallToAction'

export default function CustomDairyFeed() {
  return (
    <Layout
      title="Custom Dairy Feed - R&J Dairy Consulting"
      description="Providing options to improve farm profitability with custom formulated feeds.">

			<section className="relative w-full">
				<div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
					<Image
						src="/assets/img/pagebanners/customdairyfeed.jpg"
						alt="Custom Dairy Feed"
						fill
						className="object-cover"
						priority
						unoptimized
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
							<TypewriterText text="CUSTOM DAIRY FEED" delay={200} />
						</h1>
						<h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
							Providing options to improve farm profitability
						</h2>
					</div>
				</div>
			</section>

      <div className="py-16 mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 *:text-center *:text-xl *:tracking-wider *:text-gray-800 *:mb-4 *:font-dosis *:space-y-4">
					<div>
						<h3>Custom Formulated Feeds</h3>
						<Image 
							src="/assets/img/page-images/calf3.png"
							alt="R&J Dairy Calf Feed"
							width={350}
							height={350}
							className="size-72 sm:size-56 lg:size-72 mx-auto rounded-full object-cover"
						/>
					</div>
					<div>
						<h3>Technical on Farm Support</h3>
						<Image 
							src="/assets/img/page-images/feed-bag2.png" 
							alt="R&J Dairy Feeds" 
							width={350}
							height={350}
							className="size-72 sm:size-56 lg:size-72 mx-auto rounded-full object-cover"
						/>
					</div>
					<div>
						<h3>High Quality Ingredients</h3>
						<Image 
							src="/assets/img/page-images/milking.png" 
							alt="milking" 
							width={350}
							height={350}
							className="size-72 sm:size-56 lg:size-72 mx-auto rounded-full object-cover"
						/>
					</div>
				</div>
				
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold font-dosis text-gray-800 ">Helping you achieve your farm goals.</h2>
				</div>
				
				<hr className="border-gray-300 mb-12" />
				
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h3 className="text-3xl font-dosis text-gray-800 mb-6 text-center">
							See the difference in working with an R&J Consultant
						</h3>
						<ul className="space-y-3 text-gray-600">
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Certified nutritionist on staff running rations
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								All top dresses, concentrates, energy blends, and protein supplements are formulated to your ration
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Feeds are available in meal, flakes, or pellets
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								All rations are formulated to utilize the farms forages
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								We work with mills who offer a wide variety of protein and energy sources
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Additives such as: DFM, toxin binders, yeast, or fats can be directly mixed into the feeds
							</li>
						</ul>
					</div>
					
					<div>
						<h3 className="text-3xl font-dosis text-gray-800 mb-6 text-center">
							Services Provided by R&J Dairy Consulting
						</h3>
						<ul className="space-y-3 text-gray-600">
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Routine farm visits
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Dairy nutrition consulting and ration reformulations
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Track feed ingredient prices so we can use the most economical ingredients in your formula
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Monitor heard health
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Body condition scoring
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Record keeping
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Top technical farm support
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Provide heifer growth programs
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Profit team facilitation
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-blue-600">✓</span>
								Forage sampling
							</li>
						</ul>
					</div>
				</div>
				
				<CallToAction 
					message="Contact an R&J Consultant for more information."
					buttonText="Contact an R&J Consultant Today"
				/>
			</div>
    </Layout>
  )
}
