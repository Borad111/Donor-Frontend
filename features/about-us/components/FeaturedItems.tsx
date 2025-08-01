import React from 'react'

const featuredItems = [
  {
    badge: '120 PREVIEW ONLY',
    imgSrc: './test1.png',
    imgAlt: 'Raffle Tickets',
    imgClass: 'h-40 object-cover w-full rounded p-4',
    title: 'Raffle Tickets',
    timeLeft: '10m left to bid',
    price: '$60',
  },
  {
    badge: '1270',
    imgSrc: './test1.png',
    imgAlt: 'Heart Test Item',
    imgClass: 'h-40 object-cover w-full rounded p-4',
    title: 'Heart Test Item',
    timeLeft: '10m left to bid',
    price: '$1.50',
  },
  {
    badge: '1280',
    imgSrc: './test1.png',
    imgAlt: 'Video Screening',
    imgClass: 'h-40 object-cover w-full rounded p-4',
    title: 'Video Screening',
    timeLeft: '10m left to bid',
    price: '$150',
  },
]

const FeaturedItems = ({data}) => {
  
  return (
    <div className="bg-[#c6e3dc] w-auto py-20">
      <button className="bg-lime-200 rounded-full px-6 py-2 font-medium text-black shadow mb-8">
        TEST1
      </button>
      <h1 className="text-4xl font-semibold text-black pb-8">Featured Items</h1>
      <div className="flex flex-col gap-6 items-center sm:flex-row sm:gap-4 sm:flex-wrap md:flex-row md:gap-6 md:flex-wrap lg:flex-row lg:gap-8 lg:flex-wrap xl:flex-row xl:gap-8 xl:flex-wrap w-auto">
         {featuredItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg w-80 overflow-hidden relative mx-auto">
            <div className="absolute top-0 left-0 bg-[#5a2b81] text-white px-[10px] py-[6px] rounded-tl-[8px] rounded-br-[8px] text-[13px] font-bold z-[2]">
              {item.badge}
            </div>
            <div className="bg-gray-100 flex items-center justify-center h-56 p-5">
              <img
              src={item.imgSrc}
              alt={item.imgAlt}
              className={`${item.imgClass} cursor-pointer`}
              />
            </div>
            <div className="p-6">
              <div className="font-bold text-lg text-black">{item.title}</div>
              <div className="text-sm text-red-500 mt-1 mb-4">{item.timeLeft}</div>
              <hr />
              <div className="bg-gray-50 rounded-lg flex items-center justify-between px-4 py-4">
                <span className="font-bold text-xl text-black">{item.price}</span>
                <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-6 py-2 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedItems
