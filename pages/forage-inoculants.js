import Layout from '@/layout/Layout'
import Image from 'next/image'
import TypewriterText from '@/components/ui/TypewriterText'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/ui/CallToAction'

const maxiSaveInoculants = [
	{
		id: 1,
		title: "MAXI SAVE",
		items: [
			"Maxi Save® Dry Granular- treats 50 Ton",
			"Maxi Save® WS- treats 50 Ton",
			"Maxi Save® WS- treats 200 Ton"
		],
		note: "*Applies 180,000-360,000 CFU/gram of crop"
	},
	{
		id: 2,
		title: "MAXI SAVE PLUS W/ BUCHNERI",
		items: [
			"Maxi Save Plus® Dry Granular- treats 50 Ton",
			"Maxi Save Plus® WS- treats 50 Ton",
			"Maxi Save Plus® WS- treats 200 Ton"
		],
		note: "*Applies 500,000-750,000 CFU/gram of crop"
	}
]

const organicInoculants = [
	{
		id: 1,
		title: "ORGANIC SILAGE INOCULANTS",
		items: [
			"Organic Dry Granular – treats 50 Ton",
			"Organic WS – treats 50T or 200 Ton"
		],
		note: "*All organic inoculants are available with or without Buchneri"
	}
]

export default function ForageInoculants() {
  return (
    <Layout
      title="Forage Inoculants - R&J Dairy Consulting"
      description="You only get one chance to put up quality forages!"
    >
      <section className="relative w-full">
        <div className="relative w-full aspect-[8/3] overflow-hidden border-b-2 border-blue-800">
          <Image
            src="/assets/img/pagebanners/innoculants2.png" 
            alt="Forage Inoculants"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-barlow font-extrabold text-white mb-4 px-8 text-center" style={{ textShadow: '3px 2px 6px rgba(0, 0, 0, 0.56)' }}>
              <TypewriterText text="INOCULANTS" delay={200} />
            </h1>
            <h2 className="text-lg md:text-2xl font-barlow font-black text-white px-8 text-center" style={{ textShadow: '1px 1px 4px black' }}>
              You only get one chance to put up quality forages!
            </h2>
          </div>
        </div>
      </section>

      <div className="py-16 mx-auto max-w-7xl px-4">
				<div className="mb-12">
					<h2 className="text-3xl font-dosis text-gray-800 mb-8 text-center">Maxi-Save – Silage Inoculant</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{maxiSaveInoculants.map((inoculant) => (
							<ProductCard
								key={inoculant.id}
								title={inoculant.title}
								buttonText=""
								middleContent={
									<div className="flex flex-col items-start justify-start h-full w-full">
										<div className="flex-1 w-full px-4 py-4">
											<ul className="space-y-2 text-sm text-white/90 font-barlow mb-4">
												{inoculant.items.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
											<p className="text-sm text-white/70 italic font-barlow">
												{inoculant.note}
											</p>
										</div>
									</div>
								}
							/>
						))}
					</div>
				</div>
				
				<div className="mb-12 flex flex-col items-center">
					<h2 className="text-3xl font-dosis text-gray-800 mb-8 text-center">Organic – Silage Inoculant</h2>
					
					<div className="grid grid-cols-1  gap-8 max-w-2xl w-full">
						{organicInoculants.map((inoculant) => (
							<ProductCard
								key={inoculant.id}
								title={inoculant.title}
								buttonText=""
								middleContent={
									<div className="flex flex-col items-start justify-start h-full w-full">
										<div className="flex-1 w-full px-4 py-4">
											<ul className="space-y-2 text-sm text-white/90 font-barlow mb-4">
												{inoculant.items.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
											<p className="text-sm text-white/70 italic font-barlow">
												{inoculant.note}
											</p>
										</div>
									</div>
								}
							/>
						))}
					</div>
				</div>
				
				<CallToAction 
					message="Contact an R&J Dairy Consultant about our forage inoculant."
					buttonText="Contact Us!"
					buttonHref="/contact"
				/>
      </div>
    </Layout>
  )
}
