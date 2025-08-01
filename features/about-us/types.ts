import { SettingResponse } from "@/types/settingTypes";

export interface EventItem {
  id: number;
  description: string;
  time: string;
  eventUrl: string;
  event: string;
  createdAt: string; // ISO date string
  updatedAt: string;
}
export interface EventResponse {
  message: string;
  event: EventItem[];
}

// types.ts

export interface FeaturedItem {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: string;
  quantity: number;
  remainQuantity: number;
  restriction: string | null;
  fairMarketValue: string;
  atItemId: number;
  auctionId: number | null;
  itemType: string | null;
  primaryCategory: string | null;
  donorId: number | null;
  isTaxable: number;
  createdAt: string;
  updatedAt: string;
  userId: number | null;
  itemCode: string | null;
  isHidden: number;
  isAvailable: number;
  availableForSale: number;
  eventUrl: string;
  position: number;
  photo2: string | number; // depends on API, adjust if needed
  isUnlimited: number;
  salesQty: number | null;
  isPreview: number;
  isHidePurchaseHistory: number;
  orderIndex: number;
  isAvailableAtTicketPurchase: number;
  isLive: number;
  isLiveInPage: number;
  liveOrder: number | null;
  customFields: any; // or define properly if known
  donorUserId: number | null;
  limitQuantityPurchase: number | null;
  isFeature: number;
  solicitorId: number | null;
  buyersPremium: number | null;
}
export interface FeaturedItemsResponse {
  items: FeaturedItem[];
}
export interface FeaturedItemsRequest{
     eventUrl: string;
   search: string;
}


export interface TicketSetting {
  id: number;
  ticketDescription: string;
  ticketDate: string;
  checkInOpens: string | null;
  cocktailHour: string | null;
  dinner: string | null;
  auctionPresentation: string | null;
  eventUrl: string;
  eventVenueName: string;
  venueAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  registrationMode: boolean;
  feeType: number;
  feeName: string;
  feePer: string;
  guestCustomFields: string;
  spoFirst: boolean;
  hideDonation: boolean;
  disabledCardSave: boolean;
  disabledPartnerLink: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface TicketsResponse {
  message: string;
  success: boolean;
  ticketSetting: TicketSetting[]; // 👈 Actual array is here
}


export interface AboutUsDataResult {
  isLoading: {
    mySetting: boolean;
    featuredItems: boolean;
    events: boolean;
    tikets: boolean;
  };
  isError: {
    mySetting: boolean;
    featuredItems: boolean;
    events: boolean;
    tikets: boolean;
  };
  data: {
    mySetting?: SettingResponse; // 👈 define this
    featuredItems?: FeaturedItemsResponse; // 👈 define this
    events?: EventResponse; // already done
    tikets?:TicketsResponse; // 👈 define this
  };
}
