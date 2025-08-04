"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { Mail, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ROUTES } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { getEventUrl } from '@/lib/utils';


function Login() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pathname = usePathname();
    const eventUrl = getEventUrl(pathname);
  return (
   <Card className="w-full max-w-md p-6 shadow-md">
     <div className="flex justify-center mb-4">
          <Image
            src="/logo2.png"
            alt="DonorGlow Logo"
            width={200}
            height={40}
            priority
          />
        </div>
      <CardContent className="space-y-6">
        {/* Logo */}
       

        {/* Google Login */}
        <Button variant="outline" className="w-full">
          <FcGoogle className="mr-2" size={20} />
          Sign in with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex-1 border-t" />
          or Sign in with Email
          <div className="flex-1 border-t" />
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input
            type="email"
            placeholder="Email"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <EyeOff className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input
            type="password"
            placeholder="Password"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox accent-[#00BBA0]" />
            Remember Me
          </label>
          <Link href={ROUTES.FORGOT(eventUrl)} className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
         <button className="w-full bg-[#00AEEF] hover:bg-[#0099cc] text-white py-3 rounded-full text-lg font-semibold transition">
          Login
        </button>
        

        {/* Bottom Text */}
        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}

export default Login
