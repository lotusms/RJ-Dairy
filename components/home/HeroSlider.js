import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaAngleDoubleRight } from 'react-icons/fa'
import PrimaryButton from '@/components/ui/PrimaryButton'

const getSlideData = () => [
  {
    image: '/assets/img/slider/Slide1.jpg',
    title: 'Working alongside of you',
    subtitle: 'To help achieve your farm goals!',
    buttonText: 'Meet the R&J Consultants',
    buttonLink: '/about'
  },
  {
    image: '/assets/img/slider/Slide2.jpg',
    title: 'Thank you to all our dairy farmers',
    subtitle: 'We appreciate the passion and dedication you demonstrate every day.',
    buttonText: 'Contact an R&J Consultant',
    buttonLink: '/contact'
  },
  {
    image: '/assets/img/slider/Slide3.jpg',
    title: 'R&J Full Product Line Available',
    subtitle: 'Calf, Heifer, Dry Cow and more',
    buttonText: 'See Our Products',
    buttonLink: '/products'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = getSlideData()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-start justify-start text-white px-4 md:px-12 border-b-2 border-blue-800">
        <div className="max-w-4xl flex flex-col items-start justify-between h-full py-12">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in bg-black/30 border border-gray-800/35 text-white p-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl mb-8 animate-fade-in-delay font-dosis tracking-wide bg-black/30 border border-gray-800/35 text-white py-2 px-4">
              {slides[currentSlide].subtitle}
            </h2>
          </div>
          <div className="">
            <PrimaryButton 
              href={slides[currentSlide].buttonLink}
              icon={<FaAngleDoubleRight className="w-6 h-6 text-yellow-500" />}
              className="animate-fade-in-delay-2"
            >
              {slides[currentSlide].buttonText}
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  )
}
