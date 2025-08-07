
import { Skeleton } from "@/components/ui/skeleton";

export const SearchSkeleton = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center mt-20">
      <Skeleton className="h-6 w-32 rounded-md" /> {/* "Online Auction" Title */}

      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-60 rounded-md" /> {/* Search bar */}
        <Skeleton className="h-10 w-40 rounded-md" /> {/* Dropdown 1 */}
        <Skeleton className="h-10 w-40 rounded-md" /> {/* Dropdown 2 */}
      </div>
    </div>
  );
};
