"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';
import { useItemsData } from '../hooks/useItemsData';
import { TimeSkeleton } from '../components/TimeSkeleton';
import { SearchSkeleton } from '../components/SearchSkeleton';
import ItemListSkeleton from '../components/ItemListSkeleton';
import { Item } from '../types';

const TimeSchedule = dynamic(
  () => import('../components/TimeSchedule'),
  { ssr: false, loading: () => <TimeSkeleton /> }
);

const SearchFilter = dynamic(
  () => import('../components/SearchFilter'),
  { ssr: false, loading: () => <SearchSkeleton /> }
);

const ItemList = dynamic(
  () => import('../components/itemList'),
  { ssr: false, loading: () => <div className="flex justify-center"><ItemListSkeleton /></div> }
);

function ItemContant() {
  const [filters, setFilters] = React.useState({
    searchQuery: '',
    selectedCategories: [] as string[],
    selectedAuctionTypes: [] as string[]
  });

  const { isLoading, isError, data } = useItemsData();

  const debouncedSearchHandler = React.useMemo(
    () => debounce((query: string) => {
      setFilters(prev => ({ ...prev, searchQuery: query }));
    }, 300),
    []
  );

  const handleSearchChange = (query: string) => {
    debouncedSearchHandler(query);
  };

  const filteredItems = React.useMemo(() => {
    if (!data?.items?.items) {
      return [];
    }

    return data.items.items.filter(item => {
      // Search filter
      const matchesSearch = filters.searchQuery === '' || 
        item.name?.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
        item.itemId?.toString().includes(filters.searchQuery) ||
        item.description?.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      // Category filter
      const categoryId = item.itemCategoryId?.toString();
      const matchesCategory = filters.selectedCategories.length === 0 || 
        (categoryId && filters.selectedCategories.includes(categoryId));
      
      // Auction type filter
      const auctionType = item.auctionType?.toString();
      const matchesAuctionType = filters.selectedAuctionTypes.length === 0 || 
        (auctionType && filters.selectedAuctionTypes.includes(auctionType));
      
      // Basic item validation
      const isValidItem = item.itemId !== null && 
        (item.startingBid !== null || item.currentBid !== null);
      
      return matchesSearch && matchesCategory && matchesAuctionType && isValidItem;
    });
  }, [data?.items?.items, filters]);

  React.useEffect(() => {
    return () => {
      debouncedSearchHandler.cancel();
    };
  }, [debouncedSearchHandler]);

  return (
    <div className="w-[90%] mx-auto py-8">
      <TimeSchedule 
        isError={isError.mySetting} 
        moneyData={data?.money} 
        data={data?.mySetting?.setting} 
        isLoading={isLoading.mySetting}
      />
      
      <SearchFilter 
        auctionError={isError.auctionType} 
        auctionData={data?.auctionType?.itemAuctionTypesList || []} 
        auctionLoading={isLoading.auctionType} 
        isError={isError.category} 
        categoryData={data?.category?.itemCategoriesList || []} 
        isLoading={isLoading.category}
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategories={filters.selectedCategories}
        onCategoryChange={(categories) => setFilters(prev => ({ ...prev, selectedCategories: categories }))}
        selectedAuctionTypes={filters.selectedAuctionTypes}
        onAuctionTypeChange={(types) => setFilters(prev => ({ ...prev, selectedAuctionTypes: types }))}
      />

      <ItemList 
        isError={isError.items} 
        isLoading={isLoading.items} 
        data={filteredItems}
      />
    </div>
  );
}

export default ItemContant;