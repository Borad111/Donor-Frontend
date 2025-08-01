"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/constants/routes";
import { getEventUrl } from "@/lib/getEventUrl";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);
  return (
    <div className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mt-1 mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.ABOUT_US(eventUrl)}>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 text-md font-medium text-black">
          <Link href={ROUTES.ITEMS(eventUrl)} className="hover:text-orange-600">
        Online Auction
      </Link>
      <Link href={ROUTES.TICKETS(eventUrl)} className="hover:text-orange-600">
        Buy Tickets
      </Link>
      <Link href={ROUTES.SPONSORSHIPS(eventUrl)} className="hover:text-orange-600">
        Sponsorships
      </Link>
      <Link href={ROUTES.PREVIEW(eventUrl)} className="hover:text-orange-600">
        Preview Live Auction
      </Link>
      <Link href={ROUTES.DONATE_ITEM(eventUrl)} className="hover:text-orange-600">
        Donate an Item
      </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Donate Button */}
          <Link href={ROUTES.DONATIONS(eventUrl)}>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
              <span>💛</span> Donate
            </button>
          </Link>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <FaUserCircle size={26} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={ROUTES.LOGIN(eventUrl)}>Login</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href={ROUTES.MY_INFO(eventUrl)}>My Information</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Header;
