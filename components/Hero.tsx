"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const word = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleLine1 = "Data-driven HR을";
const titleLine2 = "선도하는 KAH";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-gradient noise-overlay overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e11d48 1px, transparent 1px), linear-gradient(90deg, #e11d48 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-500/60 to-transparent" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-500/60 to-transparent" />

      {/* Red glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-kred/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-kred animate-pulse" />
          <span className="text-kred text-xs tracking-ultra uppercase font-medium">
            수시채용 진행 중
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-kred animate-pulse" />
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-smoke-100 leading-tight tracking-tight"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {titleLine1.split(" ").map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {titleLine2.split(" ").map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`inline-block mr-[0.25em] ${
                  w === "KAH" ? "text-gradient-red" : "text-smoke-100"
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-smoke-600 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          HR의 미래를 데이터로 설계합니다.
          <br />
          인사관리 학회 KAH에서 함께 성장할 인재를 기다립니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#recruitment")}
            className="group flex items-center gap-3 px-8 py-4 bg-kred hover:bg-kred-light text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
          >
            수시채용 지원하기
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="flex items-center gap-3 px-8 py-4 border border-ink-500 hover:border-smoke-400 text-smoke-400 hover:text-smoke-100 text-sm font-medium tracking-widest uppercase transition-all duration-200"
          >
            학회 소개 보기
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {[
            { num: "4+", label: "년간 운영" },
            { num: "120+", label: "누적 회원" },
            { num: "30+", label: "프로젝트 완료" },
            { num: "12", label: "기업 파트너" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-smoke-100 mb-1">
                {stat.num}
              </div>
              <div className="text-smoke-600 text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll("#about")}
      >
        <span className="text-smoke-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-kred" />
        </motion.div>
      </motion.div>
    </section>
  );
}
