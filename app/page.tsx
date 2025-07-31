import React from 'react'


import { redirect } from 'next/navigation'

const page = () => {
  
  return (
   redirect('/about-us') // Redirecting to the About Us page
  )
}

export default page
