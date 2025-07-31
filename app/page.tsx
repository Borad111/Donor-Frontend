import React from 'react'
import AuctionInfo from '@/features/about-us/components/AuctionInfo'
import FeaturedItems from '@/features/about-us/components/FeaturedItems'

import { redirect } from 'next/navigation'

const page = () => {
  return (
   redirect('/about-us') // Redirecting to the About Us page
  )
}

export default page
