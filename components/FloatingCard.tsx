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
  dark: "bg-[#1E1B2E] text-white",
  light: "bg-[#C9CBF5] text-[#3D3A6B]",
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
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className="inline-block"
    >
      <div
        className={cn(
          // Unified capsule size — matches PortalCard exactly
          "inline-flex items-center gap-3",
          "w-[248px] h-[68px] px-5",
          "rounded-full shadow-lg",
          "select-none cursor-pointer",
          "transition-[filter] duration-300 hover:brightness-105",
          colorMap[color],
          className,
        )}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <span className="w-8 h-8 flex items-center justify-center shrink-0">
          {icon}
        </span>
        <span className="text-lg font-semibold whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
}
