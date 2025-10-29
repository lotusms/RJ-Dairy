import Link from 'next/link'
import Image from 'next/image'
import PrimaryButton from '@/components/ui/PrimaryButton'

export default function ProductCard({ 
  product, 
  className = "",
  buttonText = "Learn More",
  buttonClassName = "",
  title,
  image,
  imageAlt,
  link,
  middleContent,
  isExternal = false,
  onButtonClick = null,
  middleContentClassName = ""
}) {
  // Support both product object and individual props
  const cardTitle = title || product?.name
  const cardImage = image || (product?.image ? `/assets/img/featured/${product.image}` : null)
  const cardImageAlt = imageAlt || product?.name
  const cardLink = link || (product?.link ? `/${product.link.replace('.php', '')}` : '#')
  
  return (
    <div className={`bg-blue-800 text-gray-800 shadow-lg overflow-hidden h-full flex flex-col ${className}`}>
      <div className="text-center flex-1 flex flex-col">
        <h3 className="text-xl uppercase font-dosis bg-blue-950 text-white p-4 flex-shrink-0">{cardTitle}</h3>
        <div className={`flex-1 flex items-center justify-center ${middleContentClassName}`}>
          {middleContent ? (
            middleContent
          ) : cardImage ? (
            <Image 
              src={cardImage}
              alt={cardImageAlt}
              width={128}
              height={128}
              className="mx-auto w-full h-full object-contain"
              unoptimized
            />
          ) : (
            <div className="bg-gray-300 h-32 flex items-center justify-center text-gray-600">
              {cardImageAlt}
            </div>
          )}
        </div>
        {buttonText && (
          <div className="p-4 flex-shrink-0">
            <PrimaryButton 
              href={onButtonClick ? null : cardLink}
              onClick={onButtonClick}
              external={isExternal}
              className={`w-full bg-gray-900 text-white ${buttonClassName}`}
            >
              {buttonText}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
