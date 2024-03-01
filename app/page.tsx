"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Main />
    </>
  );
}
