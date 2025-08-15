"use client";

import { ReactNode } from "react";

import { env } from "@/env";

interface AdWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  forceShow?: boolean;
}

export function AdWrapper({ children, fallback = null, forceShow = false }: AdWrapperProps) {
  if (!env.NEXT_PUBLIC_SHOW_ADS) {
    return null;
  }

  if (process.env.NODE_ENV === "development" || forceShow) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
