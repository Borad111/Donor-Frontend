export interface AuctionItem {
    itemId: number;
    photo: string;
    name: string;
    id: number;
    title: string;
    image: string;
    currentBid: number | null;
    itemNumber: number;
    startingBid: number;
    isStartingBid?: boolean;
}

export interface AuctionStats {
    openingTime: string;
    closingTime: string;
    goalAmount: number;
    amountRaised: number;
    progressPercentage: number;
}