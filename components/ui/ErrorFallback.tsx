"use client";

import React from "react";
import { AlertTriangle } from "lucide-react"; // optional: icon
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getEventUrl } from '@/lib/utils';

import { ROUTES } from "@/constants/routes";

const ErrorFallback = () => {
    const pathname= usePathname();  
    const eventUrl = getEventUrl(pathname);
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600 max-w-md mb-6">
        We couldn’t load this section right now. Please try again later or go back to the homepage.
      </p>
      <Link
        href={ROUTES.ABOUT_US(eventUrl)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorFallback;
