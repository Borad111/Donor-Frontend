import React from 'react'

const AuctionInfo = () => {
  return (
    <div className="bg-[#c6e3de] flex flex-col items-center w-auto gap-8 py-20">
     
      {/* Progress Card */}
    <div className="bg-white rounded-xl shadow-md w-[310px] p-5">
    <div className="flex justify-between items-center mb-3">
      <span className="font-bold text-[#f28b5b] text-lg ml-auto">Goal: $99,969</span>
    </div>
      {/* Progress Bar with Steps */}
      <div className="flex items-center mb-4 mt-2 space-x-2">
        <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
        <div className="h-3 w-1/6 rounded-full bg-gray-200" />
        <div className="h-3 w-1/6 rounded-full bg-gray-200" />
        <div className="h-3 w-1/6 rounded-full bg-gray-200" />
        <div className="h-3 w-1/6 rounded-full bg-gray-200" />
        <div className="h-3 w-1/6 rounded-full bg-gray-200" />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#1dcaff] font-extrabold text-lg">$24,804 Raised!</span>
        <span className="text-black font-bold text-lg">25%</span>
      </div>
    </div>

    {/* Auction Info Card */}
    <div className="bg-[#3d184e] rounded-xl shadow-md w-[310px] h-[360px] flex flex-col items-center justify-center p-2">
      <h2 className="text-white text-xl font-extrabold text-center leading-tight mb-6">
        Celebrate A Turtle Bay Tradition With Lot Of Services
      </h2>
      <div className="bg-[#4a2060] rounded-xl w-[260px] py-6 flex flex-col items-center mb-8">
        <span className="text-white text-lg font-semibold mb-2">#342</span>
        <span className="text-[#f6c7e2] text-base font-medium">Mar 10, 2023 | 09:30 AM</span>
      </div>
      <span className="text-white mb-4 text-lg font-medium">Share</span>
      <div className="flex space-x-8">
        <a href="#" className="text-[#4267B2] text-2xl" aria-label="Facebook">
        <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#" className="text-[#e1306c] text-2xl" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-[#0e76a8] text-2xl" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-[#1da1f2] text-2xl" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
    </div>
  )
}

export default AuctionInfo
