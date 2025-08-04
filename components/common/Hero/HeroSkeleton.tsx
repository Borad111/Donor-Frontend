import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="w-full mt-24 py-8 flex justify-center items-center">
      <Skeleton className="h-8 w-80 rounded-md" />
    </div>
  );
};
