import React from 'react'

const page = () => {
  return (
    <div className='flex bg-red-500 flex-row gap-4 p-4 border rounded-lg shadow-lg bg-white'>
      <div>
        <h1 className='text-3xl  font-bold underline'>Hello World</h1>
        <p className='mt-4 text-lg'>This is a simple Next.js page.</p>
      </div>
      <div>
        <p className='mt-2 text-sm text-gray-600'>Enjoy building your application!</p>
        <p className='mt-2 text-sm text-gray-600'>This page is styled with Tailwind CSS.</p>
      </div>
    </div>
  )
}

export default page
