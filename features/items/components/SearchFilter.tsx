import React from 'react'

function SearchFilter() {
  return (
     <div className="flex mt-14 flex-col sm:flex sm:flex-col sm:text-center md:flex-col md:items-center md:justify-between mb-8 xl:flex xl:flex-row xl:gap-5 2xl:flex 2xl:flex-row 2xl:gap-5 ">
          <h1 className="text-3xl text-center font-bold text-gray-900 mb-4 md:mb-0">Online Auction</h1>

          <div className="flex flex-col md:flex-row gap-3 items-center">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-80 pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                // value={selectedCategory}
                // onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-80 appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              >
                <option value="All">All</option>
                <option value="Art">Art</option>
                <option value="Experience">Experience</option>
                <option value="Travel">Travel</option>
              </select>
              <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                // value={sortBy}
                // onChange={(e) => setSortBy(e.target.value)}
                className="w-80 appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-8 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              >
                <option value="All">All</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Ending Soon">Ending Soon</option>
              </select>
              <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

  )
}

export default SearchFilter
