"use client";

import { Receipt, Briefcase, CheckSquare, FileText } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import { PortalCard } from "./PortalCard";
import { BackgroundBlob } from "./BackgroundBlob";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#ECEEF8] dark:bg-[#0F0E1A] flex items-center">
      {/* ── Background Blobs ── */}
      <BackgroundBlob
        size="xl"
        className="top-[8%]  left-[-4%]  rotate-[-15deg]"
      />
      <BackgroundBlob
        size="lg"
        className="top-[40%] left-[-2%]  rotate-[10deg]"
      />
      <BackgroundBlob
        size="md"
        className="bottom-[12%] left-[6%] rotate-[-8deg]"
      />
      <BackgroundBlob
        size="xl"
        className="top-[5%]  right-[2%]  rotate-[12deg]"
      />
      <BackgroundBlob
        size="lg"
        className="top-[50%] right-[-2%] rotate-[-5deg]"
      />
      <BackgroundBlob
        size="lg"
        className="bottom-[8%] right-[10%] rotate-[6deg]"
      />

      {/* ── Main container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ══ LEFT: Text ══ */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl xl:text-6xl font-light leading-[1.1] text-[#3D3A6B] dark:text-[#E8E6FF]">
              A single platform to <span className="font-bold">manage</span>{" "}
              every part of your <span className="font-bold">legal work</span>
            </h1>

            <p className="text-[#6B6899] dark:text-[#9996C8] text-base leading-relaxed max-w-md">
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication – all in one system.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-7 py-3.5 bg-[#4361EE] text-white font-semibold rounded-full hover:bg-[#3451D8] transition-colors shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] focus-visible:ring-offset-2">
                Get started free
              </button>
              <button className="px-7 py-3.5 text-[#4361EE] dark:text-[#8B9EF8] font-semibold rounded-full border border-[#4361EE] dark:border-[#8B9EF8] hover:bg-[#4361EE]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] focus-visible:ring-offset-2">
                See how it works
              </button>
            </div>
          </div>

          {/* ══ RIGHT: Floating cards (desktop only) ══ */}
          <div
            className="relative h-[480px] hidden lg:block"
            aria-hidden="true"
          >
            {/* Billing – top right */}
            <div className="absolute top-[2%] right-[5%] animate-float-1">
              <FloatingCard
                color="blue"
                rotation={6}
                icon={<Receipt className="w-20 h-6" strokeWidth={1.8} />}
                label="Billing"
                animationDelay={0}
              />
            </div>

            {/* Matters – middle left */}
            <div className="absolute top-[42%] left-[0%] animate-float-2">
              <FloatingCard
                color="orange"
                rotation={-8}
                icon={<Briefcase className="w-6 h-6" strokeWidth={1.8} />}
                label="Matters"
                animationDelay={150}
              />
            </div>

            {/* Portal card – middle right */}
            <div className="absolute top-[44%] right-[2%] animate-float-3">
              <PortalCard
                name="John Doe – Portal"
                message="Hey! Could you please review a document for me?"
                tag="MAT-2XXX"
                timeAgo="2 h ago"
                rotation={3}
                animationDelay={300}
              />
            </div>

            {/* Tasks – bottom center-left */}
            <div className="absolute bottom-[6%] left-[18%] animate-float-1">
              <FloatingCard
                color="dark"
                rotation={-4}
                icon={<CheckSquare className="w-6 h-6" strokeWidth={1.8} />}
                label="Tasks"
                animationDelay={200}
              />
            </div>

            {/* Documents – bottom right */}
            <div className="absolute bottom-[2%] right-[2%] animate-float-2">
              <FloatingCard
                color="dark"
                rotation={-10}
                icon={<FileText className="w-6 h-6" strokeWidth={1.8} />}
                label="Documents"
                animationDelay={350}
              />
            </div>
          </div>

          {/* ══ MOBILE: Flat pill row ══ */}
          <div
            className="flex flex-wrap gap-3 lg:hidden justify-center pt-4"
            aria-label="Features"
          >
            {[
              {
                label: "Billing",
                color: "blue" as const,
                icon: <Receipt className="w-5 h-5" />,
              },
              {
                label: "Matters",
                color: "orange" as const,
                icon: <Briefcase className="w-5 h-5" />,
              },
              {
                label: "Tasks",
                color: "dark" as const,
                icon: <CheckSquare className="w-5 h-5" />,
              },
              {
                label: "Documents",
                color: "dark" as const,
                icon: <FileText className="w-5 h-5" />,
              },
            ].map((card) => (
              <FloatingCard key={card.label} {...card} rotation={0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
