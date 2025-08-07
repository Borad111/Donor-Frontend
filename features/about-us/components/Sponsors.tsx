import ErrorFallback from "@/components/ui/ErrorFallback";
import ItemsSkeleton from "@/components/ui/ItemsSkeleton";
import { SettingResponse, Sponsor } from "@/types/settingTypes";
import React from "react";

type Props = {
  data: Sponsor[];
  isLoading: boolean;
  isError: boolean;
};

const Sponsors = ({ isLoading, data, isError }: Props) => {
  if (isLoading) return <ItemsSkeleton />;
  if (isError) {
    return <ErrorFallback />;
  }
  return (
    <div className="bg-[#c6e3de] flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-8">Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full max-w-7xl">
        {data
          ?.filter((sponsor: any) => sponsor.photo) // sirf unhi ko lo jinke paas photo hai
          ?.map((sponsor: any, idx: number) => (
            <div className="flex flex-col items-center text-center" key={idx}>
              <img
                src={sponsor.photo}
                alt={sponsor.name}
                className="w-32 h-32 object-contain mb-2"
              />
              <p className="font-semibold">{sponsor.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sponsors;
