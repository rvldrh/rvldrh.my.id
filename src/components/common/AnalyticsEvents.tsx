"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;

    if ("gtag" in window && typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
