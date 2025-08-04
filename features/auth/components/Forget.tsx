"use client";

import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { getEventUrl } from '@/lib/utils';

import { ROUTES } from '@/constants/routes';


function Forget() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <Card className="w-full max-w-md p-6 shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo2.png"
            alt="DonorGlow Logo"
            width={200}
            height={40}
            priority
          />
        </div>

        <CardContent className="space-y-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl font-semibold">Forgot Password</h2>
          <p className="text-gray-600 text-sm">
            Enter your email and we will send you instructions to reset your password.
          </p>

          {/* Email Input */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                type="email"
                placeholder="john96@gmail.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Send Button */}
          <button className="w-full bg-[#00AEEF] hover:bg-[#0099cc] text-white py-3 rounded-full text-lg font-semibold transition">
            Send
          </button>

          {/* Back Link */}
          <p className="text-sm text-muted-foreground">
            Back to{" "}
            <Link href={ROUTES.LOGIN(eventUrl)} className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );

}

export default Forget
