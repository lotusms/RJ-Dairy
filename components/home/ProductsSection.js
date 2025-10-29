import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductsSection({ products }) {
  return (
    <section className="py-16 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/img/rjd-dark.png)'
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
					<SectionHeading bgColor="blue-800"> R&J Products </SectionHeading>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map((product, index) => (
							<ProductCard 
								key={index} 
								product={product}
							/>
						))}
					</div>
					<div className="text-center mt-8">
						<p className="text-lg text-white font-dosis">Click on each of the features above or visit our feeds page for more details!</p>
					</div>
        </div>
			</div>
		</section>
	);
}
