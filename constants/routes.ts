// You can customize the names as per your project
export const ROUTES = {
  ABOUT_US: (eventUrl: string) => `/${eventUrl}/about-us`,
  ITEMS: (eventUrl: string) => `/${eventUrl}/items`,
  TICKETS: (eventUrl: string) => `/${eventUrl}/tickets`,
  SPONSORSHIPS: (eventUrl: string) => `/${eventUrl}/tickets`, // same as TICKETS
  PREVIEW: (eventUrl: string) => `/${eventUrl}/comming`,
  DONATE_ITEM: (eventUrl: string) => `/${eventUrl}/donate-Items`,
    DONATIONS: (eventUrl: string) => `/${eventUrl}/donations`,
  LOGIN: (eventUrl: string) => `/${eventUrl}/login`,
  MY_INFO: (eventUrl: string) => `/${eventUrl}/my-Info`,
  FORGOT: (eventUrl: string) => `/${eventUrl}/forgot`,
};
