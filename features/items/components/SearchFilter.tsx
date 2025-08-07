import React, { useState } from "react";
import { ItemAuctionType, ItemCategory } from "../types";

type Props = {
  isError: boolean;
  categoryData: ItemCategory[];
  isLoading: boolean;
  auctionData: ItemAuctionType[];
  auctionLoading: boolean;
  auctionError: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  selectedAuctionTypes: string[];
  onAuctionTypeChange: (types: string[]) => void;
};

function SearchFilter({
  isError,
  categoryData,
  isLoading,
  auctionData,
  auctionLoading,
  auctionError,
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  selectedAuctionTypes,
  onAuctionTypeChange,
}: Props) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showAuctionTypeDropdown, setShowAuctionTypeDropdown] = useState(false);

  const toggleCategory = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    onCategoryChange(newCategories);
  };

  const toggleAuctionType = (typeId: string) => {
    const newTypes = selectedAuctionTypes.includes(typeId)
      ? selectedAuctionTypes.filter(id => id !== typeId)
      : [...selectedAuctionTypes, typeId];
    onAuctionTypeChange(newTypes);
  };

  const removeCategory = (categoryId: string) => {
    onCategoryChange(selectedCategories.filter(id => id !== categoryId));
  };

  const removeAuctionType = (typeId: string) => {
    onAuctionTypeChange(selectedAuctionTypes.filter(id => id !== typeId));
  };
  
  const handleDropdownClose = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.category-dropdown-container')) {
      setShowCategoryDropdown(false);
    }
    if (!target.closest('.auction-dropdown-container')) {
      setShowAuctionTypeDropdown(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleDropdownClose);
    return () => {
      document.removeEventListener('mousedown', handleDropdownClose);
    };
  }, []);

  return (
    <div className="flex justify-between mt-8 gap-4 mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Online Auction</h1>

      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Filter */}
      <div className="relative w-full md:w-80 category-dropdown-container **h-28**">
          <div 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white cursor-pointer flex items-center"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <span className="flex-grow">
              {selectedCategories.length > 0 
                ? `${selectedCategories.length} selected` 
                : "All Categories"}
            </span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showCategoryDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </div>

          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCategories.map(categoryId => {
                const category = categoryData.find(c => c.id.toString() === categoryId);
                return (
                  <div key={categoryId} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {category?.category || `ID: ${categoryId}`}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCategory(categoryId);
                      }}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {showCategoryDropdown && (
            <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
              {!isLoading && !isError && categoryData.length > 0 && categoryData.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    selectedCategories.includes(item.id.toString()) ? 'bg-blue-50' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory(item.id.toString());
                    setShowCategoryDropdown(false);
                  }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item.id.toString())}
                      readOnly
                      className="mr-2"
                    />
                    {item.category}
                  </div>
                </div>
              ))}
              {!isLoading && !isError && categoryData.length === 0 && (
                <div className="px-4 py-2 text-sm text-gray-500">No categories found</div>
              )}
            </div>
          )}
        </div>

        {/* Auction Type Filter */}
       <div className="relative w-full md:w-80 auction-dropdown-container **h-28**">
  {/* ...existing code... */}
          <div 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white cursor-pointer flex items-center"
            onClick={() => setShowAuctionTypeDropdown(!showAuctionTypeDropdown)}
          >
            <span className="flex-grow">
              {selectedAuctionTypes.length > 0 
                ? `${selectedAuctionTypes.length} selected` 
                : "All Types"}
            </span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAuctionTypeDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </div>

          {selectedAuctionTypes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedAuctionTypes.map(typeId => {
                const type = auctionData.find(t => t.id.toString() === typeId);
                return (
                  <div key={typeId} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {type?.auctionType || `ID: ${typeId}`}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeAuctionType(typeId);
                      }}
                      className="ml-1 text-purple-600 hover:text-purple-800"
                    >
                      ×
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {showAuctionTypeDropdown && (
            <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
              {!auctionLoading && !auctionError && auctionData.length > 0 && auctionData.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    selectedAuctionTypes.includes(item.id.toString()) ? 'bg-purple-50' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAuctionType(item.id.toString());
                    setShowAuctionTypeDropdown(false);
                  }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAuctionTypes.includes(item.id.toString())}
                      readOnly
                      className="mr-2"
                    />
                    {item.auctionType}
                  </div>
                </div>
              ))}
              {!auctionLoading && !auctionError && auctionData.length === 0 && (
                <div className="px-4 py-2 text-sm text-gray-500">No auction types found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;