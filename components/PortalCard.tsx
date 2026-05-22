"use client";

import { cn } from "@/lib/utils";

interface PortalCardProps {
  name: string;
  message: string;
  tag: string;
  timeAgo: string;
  rotation?: number;
  className?: string;
  animationDelay?: number;
}

export function PortalCard({
  name,
  message,
  tag,
  timeAgo,
  rotation = 0,
  className,
  animationDelay = 0,
}: PortalCardProps) {
  return (
    <div
      className={cn(
        // Same capsule dimensions as FloatingCard
        "inline-flex items-center gap-3",
        "w-[248px] h-[68px] px-4",
        "rounded-full shadow-lg",
        "bg-[#DDE0F7] dark:bg-[#1E2340]",
        "select-none cursor-pointer",
        "transition-[filter] duration-300 hover:brightness-[1.03]",
        className,
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${animationDelay}ms`,
      }}
    >
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-[#4A56C1]">
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
          <circle cx="18" cy="18" r="18" fill="#4A56C1" />
          <circle cx="18" cy="13" r="6" fill="#7B8FE8" />
          <ellipse cx="18" cy="31" rx="11" ry="8" fill="#7B8FE8" />
        </svg>
      </div>

      {/* Text — truncated to fit the pill */}
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-bold text-[#2D2A5E] dark:text-[#C5C8F0] truncate leading-tight">
          {name}
        </p>
        <p className="text-[10px] text-[#4e45d5] dark:text-[#20c291] truncate leading-tight mt-0.5">
          {message}
        </p>
        <p className="text-[9px] text-[#26243f] dark:text-[#cecddf] mt-0.5">
          {tag} · {timeAgo}
        </p>
      </div>
    </div>
  );
}
