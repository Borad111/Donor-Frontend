"use client"

import React from "react";
import { usePathname } from "next/navigation";
import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi";
import Image from "next/image";
import { getEventUrl } from "@/lib/utils";
import FooterSkeleton from "./FooterSkeleton";
  
const Footer = () => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const { data ,isLoading} = useGetMySettingQuery(eventUrl);
  if(isLoading) return <FooterSkeleton/>
  return (
    <footer className="bg-[#f1f1f1] text-gray-800 px-4  py-10">
      {/* Sponsor Title */}
      <div className="text-center  text-sm sm:text-base md:text-lg font-semibold mb-6">
        {data?.setting.technologySponsorType}
      </div>

      {/* Sponsor Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src={data?.setting?.technologySponsor || "/assets/payment-stars-logo.png"}
          alt="Technology Sponsor"
          width={224} // Example width, adjust as needed
          height={56} // Example height, adjust as needed
          className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-52 2xl:w-56 h-auto shadow-md"
        />
      </div>

      {/* MaxGiving Info */}
      <div className="flex flex-col items-center text-center gap-2 mb-6">
        <div>
          {data?.setting.footerLogo && (
            <span className="bg-black flex items-center justify-center rounded px-3 py-1 text-xs sm:text-sm font-bold uppercase">
              <Image
                src={data.setting.footerLogo}
                alt="Organization Logo"
                width={64}
                height={32}
                className="h-8 w-auto"
              />
            </span>
          )}
          <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
            {data?.setting.address}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base text-gray-700">
          <div className="flex items-center gap-1">
            <span role="img" aria-label="email">📧</span>
            <a href="mailto:support@maxgiving.com" className="underline">
              {data?.setting.contactEmail}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span role="img" aria-label="phone">📞</span>
            <span>{data?.setting.contactPhone}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 pt-4 mt-10 text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>{`© COPYRIGHT 2019-${new Date().getFullYear()} MAXGIVING ALL RIGHTS RESERVED`}</span>
        <a href="https://maxgiving.com/terms-of-use/"
          target="_blank" className="underline">
          Terms of Use & Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
