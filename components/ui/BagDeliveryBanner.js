import Image from 'next/image'

export default function BagDeliveryBanner({ 
  image = "/assets/img/feeds/RJ-Bagged.jpg",
  alt = "Custom Feed Bags",
  message = "Weekly bag delivery is available - 10 bag minimum (mix & match)",
  className = ""
}) {
  return (
    <div className={`bg-blue-800 text-white p-12 text-center ${className}`}>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="h-72 sm:h-96 md:h-56 object-cover object-center overflow-hidden w-full md:w-1/3">
          <Image 
            src={image} 
            alt={alt} 
            width={650}
            height={650}
            className="w-full h-72 sm:h-96 md:h-56 object-cover object-center overflow-hidden"
            unoptimized
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-3xl md:text-5xl mb-6 text-center font-dosis tracking-wider">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

