import Layout from '@/layout/Layout'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/ui/CallToAction'

const transitionalFeeds = [
	{
		id: 1,
		title: "R&J DRY COW",
		image: "/assets/img/feeds/dry-cow.JPG",
		alt: "R&J Dry Cow",
		specs: [
			"Feeding Rate: 2 lbs/day",
			"Feed type: Pellet"
		]
	},
	{
		id: 2,
		title: "R&J PRE-FRESH COMPLETE",
		image: "/assets/img/feeds/PreFresh-Complete.JPG",
		alt: "R&J Pre-Fresh Complete",
		specs: [
			"Feeding Rate: 6-8 lbs/day 2 weeks before freshening",
			"Feed type: Textured. Can be made into a meal"
		]
	},
	{
		id: 3,
		title: "R&J LACTA-MAX",
		image: "/assets/img/feeds/lacta-max.JPG",
		alt: "R&J Lacta-Max",
		specs: [
			"A proven and effective combination of critical nutrients for POST-FRESH dairy cows",
			"Feeding Rate: 2 lbs/day at freshening for 2 weeks",
			"Feed type: Pellet"
		]
	}
]

const transitionalFeedsNoImage = [
	{
		id: 4,
		title: "R&J PRE-FRESH CONCENTRATE",
		specs: [
			"Feeding Rate: 2-4 lb",
			"Feed Type: Pellet or Meal"
		]
	},
	{
		id: 5,
		title: "R&J DRY COW MINERAL 8oz",
		specs: [
			"Feeding Rate: 8oz",
			"Feed Type: Mineral"
		]
	}
]

export default function TransitionalFeed() {
  return (
    <Layout
      title="Transitional Feed - R&J Dairy Consulting"
      description="Quality transitional feeds for your dairy operation."
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/transitinal_banner.png"
            alt="Transitional Feed"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="TRANSITIONAL FEED" delay={200} />
            </h1>
            <h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
              Providing critical nutrition for the right start!
            </h2>
          </div>
        </div>
      </section>

			<div className="py-16 mx-auto max-w-7xl px-4">
				<div className="mb-12">
					<p className="text-lg text-gray-600 leading-relaxed text-center font-barlow">
						RJ Dry Cow and Pre-Fresh feeds deliver nutrients and technologies to allow cows to use energy efficiently, support smooth transitions, improve herd health, support high production levels and have higher conception rates. Feeding RJ Dry Cow and RJ Pre-Fresh feeds will improve a cows production and health for her entire lactation. Invest in her future!
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{transitionalFeeds.map((feed) => (
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{transitionalFeedsNoImage.map((feed) => (
						<ProductCard
							key={feed.id}
							title={feed.title}
							buttonText=""
							middleContent={
								<div className="flex flex-col items-start justify-start h-full w-full">
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
				
				<CallToAction 
					message="Contact an R&J Dairy Consultant to review your Dry/Pre-Fresh program"
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
