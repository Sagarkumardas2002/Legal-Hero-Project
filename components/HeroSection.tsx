"use client";

import { Receipt, Briefcase, CheckSquare, FileText } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import { PortalCard } from "./PortalCard";
import { BackgroundBlob } from "./BackgroundBlob";

// Shared animation wrapper — keeps JSX DRY
function FloatWrapper({
  children,
  animClass,
  hoverShadow,
  className = "",
}: {
  children: React.ReactNode;
  animClass: string;
  hoverShadow: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300
        hover:scale-105 hover:-translate-y-1.5 ${hoverShadow}
        ${animClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#ECEEF8] dark:bg-[#0F0E1A] flex items-center">
      {/* Background Blobs */}
      <BackgroundBlob
        size="xl"
        className="top-[6%]  left-[14%]  rotate-[-15deg]"
      />
      <BackgroundBlob
        size="lg"
        className="top-[40%] left-[-2%]  rotate-[10deg]"
      />
      <BackgroundBlob
        size="lg"
        className="bottom-[12%] left-[6%] rotate-[-8deg]"
      />
      <BackgroundBlob
        size="xl"
        className="top-[5%]  right-[2%]  rotate-[12deg]"
      />
      <BackgroundBlob
        size="lg"
        className="top-[50%] right-[-2%] rotate-[-15deg]"
      />
      <BackgroundBlob
        size="md"
        className="bottom-[8%] right-[10%] rotate-[16deg]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl xl:text-6xl font-light leading-[1.1] text-[#3D3A6B] dark:text-[#E8E6FF]">
              A single platform to <span className="font-bold">manage</span>{" "}
              every part of your <span className="font-bold">legal work</span>
            </h1>
            <p className="text-[#6B6899] dark:text-[#9996C8] text-base leading-relaxed max-w-md">
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication – all in one system.
            </p>
            <div className="flex flex-row gap-2.5 pt-2">
              <button className="flex-1 text-center px-4 py-3 bg-[#4361EE] text-white font-semibold rounded-full text-sm ...">
                Get started free
              </button>
              <button className="flex-1 text-center px-4 py-3 text-[#8B9EF8] font-semibold rounded-full border border-[#8B9EF8] text-sm ...">
                See how it works
              </button>
            </div>
          </div>

          {/* RIGHT — Desktop */}
          <div
            className="relative h-[500px] hidden lg:block"
            aria-hidden="true"
          >
            <FloatWrapper
              animClass="animate-float-1"
              hoverShadow="hover:drop-shadow-[0_8px_24px_rgba(67,97,238,0.35)]"
              className="top-[2%] right-[4%]"
            >
              <FloatingCard
                color="blue"
                rotation={-6}
                icon={<Receipt className="w-6 h-6" strokeWidth={1.8} />}
                label="Billing"
                animationDelay={0}
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-2"
              hoverShadow="hover:drop-shadow-[0_8px_24px_rgba(212,97,42,0.35)]"
              className="top-[22%] left-[0%]"
            >
              <FloatingCard
                color="orange"
                rotation={11}
                icon={<Briefcase className="w-6 h-6" strokeWidth={1.8} />}
                label="Matters"
                animationDelay={150}
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-3"
              hoverShadow="hover:drop-shadow-[0_8px_24px_rgba(67,97,238,0.25)]"
              className="top-[44%] right-[1%]"
            >
              <PortalCard
                name="Sagar Das – Portal"
                message="Could you review a document?"
                tag="MAT-2XXX"
                timeAgo="2 h ago"
                rotation={8}
                animationDelay={300}
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-1"
              hoverShadow="hover:drop-shadow-[0_8px_28px_rgba(30,27,46,0.45)]"
              className="bottom-[16%] left-[16%]"
            >
              <FloatingCard
                color="dark"
                rotation={-10}
                icon={<CheckSquare className="w-6 h-6" strokeWidth={1.8} />}
                label="Tasks"
                animationDelay={0}
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-2"
              hoverShadow="hover:drop-shadow-[0_8px_28px_rgba(30,27,46,0.45)]"
              className="bottom-[-8%] right-[2%]"
            >
              <FloatingCard
                color="dark"
                rotation={10}
                icon={<FileText className="w-6 h-6" strokeWidth={1.8} />}
                label="Documents"
                animationDelay={100}
              />
            </FloatWrapper>
          </div>

          {/* RIGHT — Mobile */}
          <div className="relative h-[320px] lg:hidden" aria-label="Features">
            <FloatWrapper
              animClass="animate-float-2"
              hoverShadow="hover:drop-shadow-[0_6px_18px_rgba(212,97,42,0.35)]"
              className="top-[0%] right-[2%]"
            >
              <FloatingCard
                color="orange"
                rotation={14}
                icon={<Briefcase className="w-5 h-5" strokeWidth={1.8} />}
                label="Matters"
                animationDelay={10}
                className="!w-[195px] !h-[54px] !px-4 text-base"
              />
            </FloatWrapper>
            <FloatWrapper
              animClass="animate-float-1"
              hoverShadow="hover:drop-shadow-[0_6px_18px_rgba(67,97,238,0.35)]"
              className="top-[50%] right-[2%]"
            >
              <FloatingCard
                color="blue"
                rotation={-8}
                icon={<Receipt className="w-5 h-5" strokeWidth={1.8} />}
                label="Billing"
                animationDelay={0}
                className="!w-[195px] !h-[54px] !px-4 text-base"
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-3"
              hoverShadow="hover:drop-shadow-[0_6px_18px_rgba(67,97,238,0.25)]"
              className="top-[22%] left-[0%]"
            >
              <PortalCard
                name="Sagar Das – Portal"
                message="Could you review a document?"
                tag="MAT-2XXX"
                timeAgo="2 h ago"
                rotation={6}
                animationDelay={200}
                className="!w-[195px] !h-[54px] !px-3"
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-1"
              hoverShadow="hover:drop-shadow-[0_6px_18px_rgba(30,27,46,0.40)]"
              className="bottom-[4%] left-[4%]"
            >
              <FloatingCard
                color="dark"
                rotation={8}
                icon={<CheckSquare className="w-5 h-5" strokeWidth={1.8} />}
                label="Tasks"
                animationDelay={150}
                className="!w-[195px] !h-[54px] !px-4 text-base"
              />
            </FloatWrapper>

            <FloatWrapper
              animClass="animate-float-2"
              hoverShadow="hover:drop-shadow-[0_6px_18px_rgba(30,27,46,0.40)]"
              className="bottom-[-20%] right-[2%]"
            >
              <FloatingCard
                color="dark"
                rotation={-6}
                icon={<FileText className="w-5 h-5" strokeWidth={1.8} />}
                label="Documents"
                animationDelay={250}
                className="!w-[195px] !h-[54px] !px-4 text-base"
              />
            </FloatWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
