import { SettingResponse } from "@/types/settingTypes";

export interface Item {
  id: number;
  itemId: number | null;
  auctionId: number | null;
  restriction: string | null;
  name: string;
  itemCategoryId: number;
  isFeature: number;
  isHighlightItem: number | null;
  isHidden: number;
  isSold: number | null;
  isTaxable: number | null;
  photo: string;
  photo2: string;
  photo3: string;
  description: string;
  startingBid: string;
  bidRaise: string;
  currentBid: string | null;
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
  auctionType: number;
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

export interface ItemsDataResult{
    isLoading: {
        items: boolean;
        mySetting: boolean;
        money: boolean;
    },
    isError: {
        items: boolean;
        mySetting: boolean;
        money: boolean;
    },
    data: {
        items?: ItemsResponse;
        mySetting?: SettingResponse;
        money?: MoneyRaisedResponse;
    }

}