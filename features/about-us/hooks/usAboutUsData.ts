import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi";
import { getEventUrl } from '@/lib/utils';

import { usePathname } from "next/navigation";
import {
  useGetEventsQuery,
  useGetFeaturedItemsQuery,
  useGetTiketsQuery,
} from "../api/featureItemApi";
import { AboutUsDataResult } from "../types";

export const useAboutUsData = () :  AboutUsDataResult => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const mySetting = useGetMySettingQuery(eventUrl)
  const featuredItems = useGetFeaturedItemsQuery({ eventUrl, search: "sales" });
  const events = useGetEventsQuery(eventUrl);
  const tikets = useGetTiketsQuery(eventUrl);



  return {
    isLoading:{
        mySetting: mySetting.isLoading,
        featuredItems: featuredItems.isLoading,
        events: events.isLoading,
        tikets: tikets.isLoading,
    },  
    isError:{
        mySetting: mySetting.isError,
        featuredItems: featuredItems.isError,
        events: events.isError,
        tikets: tikets.isError,
    },
    data: {
      mySetting: mySetting.data,
      featuredItems: featuredItems.data,
      events: events.data,
      tikets: tikets.data,
    },
  };
};
