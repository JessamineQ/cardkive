"use client"

import MainLayout from './layouts/MainLayout.js'
import CarouselComp from './components/CarouselComp.js'
import Product from './components/Product.js'

export default function Home() {

  const products= [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      url: "https://picsum.photos/id/7",
      price: 2500
    },
    {
      id: 2,
      title: "Book",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      url: "https://picsum.photos/id/20",
      price: 1599
    }
  ]
  
  return (
    <>
        <MainLayout>
          <CarouselComp />

          <div className="max-w-[1200px] mx-auto">
            <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

            <div className="grid grid-cols-5 gap-4">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </MainLayout>
    </>
  )
}