
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
    /* Outer wrapper for static rotation — same pattern as FloatingCard */
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className="inline-block"
    >
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg",
          "bg-[#DDE0F7] dark:bg-[#2A2850]",
          "transition-[filter,scale] duration-300 hover:scale-105",
          "floating-card select-none cursor-default min-w-[240px] max-w-[300px]",
          className,
        )}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {/* Left accent bar */}
        <div className="w-1 h-10 rounded-full bg-[#4361EE] shrink-0" />

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full shrink-0 bg-[#4A56C1] flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="20" fill="#4A56C1" />
            <circle cx="20" cy="15" r="7" fill="#7B8FE8" />
            <ellipse cx="20" cy="35" rx="12" ry="9" fill="#7B8FE8" />
          </svg>
        </div>

        {/* Text content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[#2D2A5E] dark:text-[#C5C8F0] truncate">
            {name}
          </p>
          <p className="text-xs text-[#5A5785] dark:text-[#8E8CC0] leading-tight mt-0.5 line-clamp-2">
            {message}
          </p>
          <p className="text-[10px] text-[#7A78A8] dark:text-[#6A68A0] mt-1">
            {tag} · {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}