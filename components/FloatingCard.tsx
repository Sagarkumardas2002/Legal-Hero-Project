

"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardColor = "blue" | "orange" | "dark" | "light";

interface FloatingCardProps {
  color: CardColor;
  rotation?: number;
  icon: ReactNode;
  label: string;
  className?: string;
  animationDelay?: number;
}

const colorMap: Record<CardColor, string> = {
  blue: "bg-[#4361EE] text-white",
  orange: "bg-[#D4612A] text-white",
  dark: "bg-[#1E1B2E] text-white dark:bg-[#1E1B2E]",
  light: "bg-[#C7CBF5] text-[#3D3A6B]",
};

export function FloatingCard({
  color,
  rotation = 0,
  icon,
  label,
  className,
  animationDelay = 0,
}: FloatingCardProps) {
  return (
    /* Outer wrapper handles static rotation so it doesn't fight the
       card-enter keyframe which also uses `transform` */
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className="inline-block"
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 px-5 py-3.5 rounded-full shadow-lg",
          "transition-[filter,scale] duration-300 hover:scale-105",
          "floating-card select-none cursor-default",
          colorMap[color],
          className,
        )}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <span className="w-7 h-7 flex items-center justify-center shrink-0">
          {icon}
        </span>
        <span className="text-lg font-semibold whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
}