import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEventUrl = (pathname: string): string => {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length > 0 ? parts[0] : "";
};

export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2); // get last 2 digits
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;

  return `${day}-${month}-${year}, ${hour12}:${minutes}${ampm}`;
};


export const getTimeLeft = (end: string) => {
  const now = new Date();
  const endDate = new Date(end);

  const diff = endDate.getTime() - now.getTime();

  if (diff <= 0) return "Bidding closed";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  return `${days} day(s) ${hours} hr(s) left to bid`;
};
