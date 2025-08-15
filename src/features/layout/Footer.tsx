import { getI18n } from "locales/server";
import { TFunction } from "locales/client";
import { cn } from "@/shared/lib/utils";
import { WorkoutSessionTimer } from "@/features/workout-session/ui/workout-session-timer";
import UserLeaderboardPosition from "@/features/leaderboard/ui/user-leaderboard-position";
import { Link } from "@/components/ui/link";

const NAVIGATION = (t: TFunction) => [
  { name: t("commons.about"), href: "/about" },
];

export const Footer = async () => {
  const t = await getI18n();
  return (
    <footer className="relative border-t border-base-300 dark:border-gray-800 bg-base-100 dark:bg-black px-2 sm:px-6 py-2 rounded-b-lg">
      <WorkoutSessionTimer />
      <UserLeaderboardPosition />
      <div className="flex sm:flex-row justify-between items-center gap-4">
        <div className="flex sm:flex-row gap-1 sm:gap-3 text-center text-gray-700 dark:text-gray-300">
          {NAVIGATION(t).map(({ name, href }) => (
            <Link
              className={cn("hover:underline hover:text-blue-500 dark:hover:text-blue-400 text-xs sm:text-sm")}
              href={href}
              key={name}
              size="sm"
              variant="footer"
              {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
