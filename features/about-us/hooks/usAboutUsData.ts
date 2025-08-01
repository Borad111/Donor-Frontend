import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi";
import { getEventUrl } from "@/lib/getEventUrl";
import { usePathname } from "next/navigation";
import {
  useGetEventsQuery,
  useGetFeaturedItemsQuery,
  useGetTiketsQuery,
} from "../api/featureItemApi";

export const useAboutUsData = () => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const mySetting = useGetMySettingQuery(eventUrl);
  const featuredItems = useGetFeaturedItemsQuery({ eventUrl, search: "sales" });
  const events = useGetEventsQuery(eventUrl);
  const tikets = useGetTiketsQuery(eventUrl);

  const isLoading = [mySetting, featuredItems, events, tikets].some(
    (q) => q.isLoading
  );
  const isError = [mySetting, featuredItems, events, tikets].some(
    (q) => q.isError
  );

  return {
    isLoading,
    isError,
    data: {
      mySetting: mySetting.data,
      featuredItems: featuredItems.data,
      events: events.data,
      tikets: tikets.data,
    },
  };
};
