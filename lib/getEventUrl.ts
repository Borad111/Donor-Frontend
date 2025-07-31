// lib/getEventUrl.ts
export const getEventUrl = (pathname: string): string => {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length > 0 ? parts[0] : "";
};
