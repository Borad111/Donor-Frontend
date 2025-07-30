"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mt-1 mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/about-us">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 text-md font-medium text-black">
          <Link href="/items" className="hover:text-orange-600">
            Online Auction
          </Link>
          <Link href="/tickets" className="hover:text-orange-600">
            Buy Tickets
          </Link>
          <Link href="/tickets" className="hover:text-orange-600">
            Sponsorships
          </Link>
          <Link href="/comming" className="hover:text-orange-600">
            Preview Live Auction
          </Link>
          <Link href="/donate-Items" className="hover:text-orange-600">
            Donate an Item
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Donate Button */}
          <Link href="/donations">
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
                  <Link href="/login" >Login</Link> 
                </DropdownMenuItem>
              
                <DropdownMenuItem asChild>
                   <Link href="/my-Info" >My Information</Link> 
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
