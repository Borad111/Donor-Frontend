import { SettingResponse } from "@/types/settingTypes";

export interface Item {
  id: number;
  itemId: number | null;
  auctionId: number | null;
  restriction: string | null;
  name: string;
  itemCategoryId: number | null;
  isFeature: number;
  isHighlightItem: number | null;
  isHidden: number;
  isSold: number | null;
  isTaxable: number | null;
  photo: string;
  photo2: string;
  photo3: string;
  description: string;
  startingBid: number | null;
  bidRaise: string;
  currentBid: number | null;
  buyNow: string;
  fairMarketValue: string;
  winningBidder: string | null;
  status: string;
  atItemId: number | null;
  itemType: string | null;
  createdAt: string;
  updatedAt: string;
  donorId: string | null;
  isPreview: number;
  video: string | null;
  eventUrl: string;
  auctionType: number | null;
  isPriceless: number | null;
  isLive: number;
  isLiveInPage: number;
  liveOrder: number;
  photo4: string;
  photo5: string;
  isAvailableOnline: number;
  donorUserId: number | null;
  packageId: number | null;
  winnerInstructions: string | null;
  isPackage: number | null;
  solicitorId: number | null;
  hideAutoBid: number | null;
  taxAppliesToPackage: number | null;
  itemTax: number | null;
  consignmentItemId: number | null;
  charityCost: number | null;
  certificateStatus: string | null;
  vendorId: number | null;
  buyersPremium: number | null;
  buyersPremAmount: number | null;
  transactionId: number | null;
  procurementNumber: number;
  winningBidNumber: string | null;
  bidLabel: string;
  displayBid: number | null;
}

export interface ItemsResponse {
  items: Item[] ;
  isEventId: boolean;
  success: boolean;
}

export interface MoneyRaisedResponse {
  total: number;
  success: boolean;
}

export interface ItemCategory {
  id: number;
  category: string;
  eventUrl: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface ItemCategoriesResponse {
  message: string;
  itemCategoriesList: ItemCategory[];
  success: boolean;
}

export interface ItemAuctionType {
  id: number;
  eventUrl: string;
  auctionType: string;
  startDate: string | null;
  endDate: string | null;
  isDateSet: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ItemAuctionTypeResponse {
  message: string;
  itemAuctionTypesList: ItemAuctionType[];
  success: boolean;
}

export interface ItemsDataResult{
    isLoading: {
        items: boolean;
        mySetting: boolean;
        money: boolean;
        category: boolean;
        auctionType: boolean;
    },
    isError: {
        items: boolean;
        mySetting: boolean;
        money: boolean;
        category: boolean;    
        auctionType: boolean;
    },
    data: {
        items?: ItemsResponse;
        mySetting?: SettingResponse;
        money?: MoneyRaisedResponse;
        category?: ItemCategoriesResponse;
        auctionType?: ItemAuctionTypeResponse;
    }

}