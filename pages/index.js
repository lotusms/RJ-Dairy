import Layout from '@/layout/Layout'
import HeroSlider from '@/components/home/HeroSlider'
import WhoWeAre from '@/components/home/WhoWeAre'
import VideoSection from '@/components/home/VideoSection'
import ProductsSection from '@/components/home/ProductsSection'
import Milk97Section from '@/components/home/Milk97Section'
import InfoCardsSection from '@/components/home/InfoCardsSection'
import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/data/products.json')
        const productsData = await response.json()
        setProducts(productsData)
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }
    loadProducts()
  }, [])

  return (
    <Layout 
      title="R&J Dairy Consulting" 
      description="R&J Dairy Consulting - Working alongside of you to help achieve your farm goals!">
      <HeroSlider />
      <WhoWeAre />
      <VideoSection />
      <ProductsSection products={products} />
      <Milk97Section />
      <InfoCardsSection />
    </Layout>
  )
}