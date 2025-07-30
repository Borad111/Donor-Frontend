import AuctionInfo from '@/features/about-us/components/AuctionInfo'
import FeaturedItems from '@/features/about-us/components/FeaturedItems'
import Hero from '@/features/about-us/components/Hero'
import Sponsors from '@/features/about-us/components/Sponsors'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <div className='flex flex-col sm:flex sm:flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:gap-8 justify-evenly bg-[#c6e3de]'>
      <FeaturedItems />
      <AuctionInfo />
      </div>
      <Sponsors />
    </div>
  )
}

export default page
