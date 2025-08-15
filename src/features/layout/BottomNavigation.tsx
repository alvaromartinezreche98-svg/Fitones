"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Crown, Dumbbell, Grid, User } from "lucide-react";

import { useCurrentLocale, useI18n } from "locales/client";
import { cn } from "@/shared/lib/utils";
import { paths } from "@/shared/constants/paths";

export function BottomNavigation() {
  const pathname = usePathname();
  const t = useI18n();
  const locale = useCurrentLocale();

  const tabs = [
    {
      id: "workout-builder",
      label: t("bottom_navigation.workouts"),
      shortLabel: t("bottom_navigation.workouts"),
      mobileLabel: t("bottom_navigation.workouts"),
      href: paths.root,
      icon: Dumbbell,
      emoji: "WorkoutCoolHappy.png",
      description: t("bottom_navigation.workouts_tooltip"),
      isActive: pathname === paths.root || pathname === `/${locale}`,
    },
    {
      id: "programs",
      label: t("bottom_navigation.programs"),
      shortLabel: t("bottom_navigation.programs"),
      mobileLabel: t("bottom_navigation.programs"),
      href: `${paths.programs}`,
      icon: Grid,
      emoji: "WorkoutCoolSwag.png",
      description: t("bottom_navigation.programs_tooltip"),
      isActive: pathname.includes(paths.programs),
    },
    {
      id: "profile",
      label: t("bottom_navigation.profile"),
      shortLabel: t("bottom_navigation.profile"),
      mobileLabel: t("bottom_navigation.profile"),
      href: `/${locale}/${paths.profile}`,
      icon: User,
      description: t("bottom_navigation.profile_tooltip"),
      isActive: pathname.includes("/profile"),
    },
  ];

  return (
    <nav className="relative bg-white/90 dark:bg-[#232324]/90 backdrop-blur-xl border-t border-[#4F8EF7]/15 dark:border-slate-700/50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7]/3 via-transparent to-[#25CB78]/3 pointer-events-none" />

      <div className="relative sm:px-3 py-2">
        <div className="flex justify-center items-center sm:gap-2 max-w-full mx-auto">
          {tabs.map((tab) => {
            const isActive = tab.isActive;
            const IconComponent = tab.icon;

            return (
              <Link
                className={cn(
                  "group relative flex flex-col items-center gap-0.5 sm:gap-1 flex-1 min-w-0 px-1 sm:px-4 py-1 rounded-2xl transition-all duration-300 ease-out",
                  "hover:scale-105 active:scale-95",
                  isActive
                    ? "bg-gradient-to-br from-[#4F8EF7]/8 to-[#25CB78]/8 border border-[#4F8EF7]/20"
                    : "hover:bg-gray-50/80 dark:hover:bg-slate-800/50",
                )}
                href={tab.href}
                key={tab.id}
              >
                {/* Active top indicator */}
                {isActive && (
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-0.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#25CB78]" />
                )}

                {/* Icon container */}
                <div className="relative flex items-center justify-center">
                  {isActive && (
                    <div className="absolute inset-0 rounded-full blur-sm scale-150 bg-gradient-to-br from-[#4F8EF7]/15 to-[#25CB78]/15" />
                  )}

                  {/* Main icon */}
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ease-out",
                      isActive
                        ? "bg-gradient-to-br from-[#4F8EF7] to-[#25CB78] text-white scale-110"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300",
                    )}
                  >
                    <IconComponent size={isActive ? 15 : 13} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                </div>

                {/* Label - responsive text */}
                <span
                  className={cn(
                    "text-[9px] sm:text-xs font-semibold transition-all duration-300 ease-out leading-tight truncate max-w-full text-center",
                    isActive
                      ? "text-transparent bg-gradient-to-r from-[#4F8EF7] to-[#25CB78] bg-clip-text"
                      : "text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200",
                  )}
                >
                  <span className="hidden sm:inline">{tab.shortLabel}</span>
                  <span className="inline sm:hidden">{tab.mobileLabel}</span>
                </span>

                {/* Hover tooltip - only on non-touch devices and larger screens */}
                <div
                  className={cn(
                    "absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 pointer-events-none transition-all duration-200 whitespace-nowrap z-50",
                    "after:content-[''] after:absolute after:top-full after:left-1/2 after:transform after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-900/90",
                    "hidden sm:block sm:group-hover:opacity-100 sm:group-hover:-translate-y-1",
                  )}
                >
                  {tab.description}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
