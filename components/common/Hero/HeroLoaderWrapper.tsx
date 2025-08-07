"use client";

import dynamic from "next/dynamic";
import { HeroSkeleton } from "@/components/common/Hero/HeroSkeleton";

const Hero = dynamic(() => import("@/components/common/Hero/Hero"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

export default function HeroLoaderWrapper() {
  return <Hero />;
}
