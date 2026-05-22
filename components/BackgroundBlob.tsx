
import { cn } from "@/lib/utils";

interface BackgroundBlobProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap: Record<NonNullable<BackgroundBlobProps["size"]>, string> = {
  sm: "w-24 h-14",
  md: "w-40 h-20",
  lg: "w-56 h-28",
  xl: "w-72 h-36",
};

export function BackgroundBlob({
  className,
  size = "lg",
}: BackgroundBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full opacity-60 dark:opacity-30 pointer-events-none",
        "bg-[#C7CBF5] dark:bg-[#2A2850]",
        sizeMap[size],
        className,
      )}
    />
  );
}
