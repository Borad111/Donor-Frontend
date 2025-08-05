import React from 'react'
import ItemSkeleton from './ItemSkeleton'

function ItemListSkeleton() {
  return (
   <div className="flex flex-wrap gap-6  justify-center">
      {Array.from({ length: 8 }).map((_, idx) => (
        <ItemSkeleton key={idx} />
      ))}
    </div>
  )
}

export default ItemListSkeleton
