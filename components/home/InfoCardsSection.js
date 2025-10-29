import ProductCard from '@/components/ui/ProductCard'
import WeatherWidget from '@/components/ui/WeatherWidget'
import { useState } from 'react'

export default function InfoCardsSection() {
  const [selectedCity, setSelectedCity] = useState("Lancaster, PA")
  const [showCitySelector, setShowCitySelector] = useState(false)

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity)
  }

  const toggleCitySelector = () => {
    setShowCitySelector(!showCitySelector)
  }

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className=" mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            title="Class III Milk Futures"
            image="/assets/img/milk.png"
            imageAlt="milk futures"
            link="http://www.cmegroup.com/trading/agricultural/dairy/class-iii-milk.html"
            buttonText="See More"
            isExternal={true}
						middleContentClassName="p-8"
          />
          
          <ProductCard 
            title={selectedCity}
            imageAlt="Weather Widget"
            link="#"
            buttonText={showCitySelector ? "Hide Cities" : "Change City"}
            isExternal={false}
            onButtonClick={toggleCitySelector}
            middleContent={
              <WeatherWidget 
                city={selectedCity} 
                className="h-full"
                onCityChange={handleCityChange}
                showCitySelector={showCitySelector}
              />
            }
						middleContentClassName="p-8"
          />
          
          <ProductCard 
            title="Grain Futures"
            image="/assets/img/grain-futures.png"
            imageAlt="Grain Futures"
            link="https://www.barchart.com/futures/grains"
            buttonText="See More"
            isExternal={true}
						middleContentClassName="p-8"
          />
        </div>
      </div>
    </section>
  )
}
