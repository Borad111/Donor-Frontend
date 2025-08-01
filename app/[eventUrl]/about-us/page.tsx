import ItemsSkeleton from "@/components/ui/ItemsSkeleton";
import AboutContent from "@/features/about-us/containers/AboutContent";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<ItemsSkeleton />}>
      <AboutContent />
    </Suspense>
  );
};

export default page;
