"use client";

import { Mail, Instagram, Linkedin, ExternalLink, ArrowUp } from "lucide-react";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "./ui/AnimatedWrapper";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const quickLinks = [
  { label: "학회 소개", href: "#about" },
  { label: "주요 활동", href: "#activities" },
  { label: "수시채용", href: "#recruitment" },
  { label: "문의하기", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-ink-900 border-t border-ink-600/50">
      {/* CTA Band */}
      <div className="bg-kred py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeUp delay={0}>
            <div>
              <div className="text-white/60 text-xs tracking-ultra uppercase mb-2">
                Join KAH
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold">
                지금 바로 지원하고
                <br />
                HR의 미래를 함께 만드세요.
              </h3>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-kred text-sm font-bold tracking-widest uppercase hover:bg-smoke-200 transition-all duration-200 active:scale-95 flex-shrink-0">
              수시채용 지원하기
              <ExternalLink size={15} />
            </button>
          </FadeUp>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-kred flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest">K</span>
                </div>
                <span className="text-smoke-100 font-semibold text-xl tracking-[0.15em] uppercase">
                  KAH
                </span>
              </div>
              <p className="text-smoke-600 text-sm leading-relaxed max-w-sm mb-6">
                인사관리 학회 KAH는 데이터 기반의 HR 전문가를 육성하는
                대학생 학술 학회입니다. HR의 미래를 함께 설계합니다.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 border border-ink-500 flex items-center justify-center text-smoke-600 hover:text-smoke-100 hover:border-smoke-400 transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
                <a
                  href="mailto:kah.hr.club@gmail.com"
                  className="w-10 h-10 border border-ink-500 flex items-center justify-center text-smoke-600 hover:text-smoke-100 hover:border-smoke-400 transition-all duration-200"
                  aria-label="이메일"
                >
                  <Mail size={16} />
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Quick Links */}
          <div>
            <FadeUp delay={0.1}>
              <h4 className="text-smoke-100 text-xs tracking-ultra uppercase font-medium mb-6">
                바로가기
              </h4>
              <StaggerContainer className="space-y-3">
                {quickLinks.map((link) => (
                  <StaggerItem key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="block text-smoke-600 hover:text-smoke-100 text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeUp>
          </div>

          {/* Contact Info */}
          <div>
            <FadeUp delay={0.2}>
              <h4 className="text-smoke-100 text-xs tracking-ultra uppercase font-medium mb-6">
                연락처
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-smoke-600 text-xs uppercase tracking-widest mb-1">
                    이메일
                  </div>
                  <a
                    href="mailto:kah.hr.club@gmail.com"
                    className="text-smoke-400 hover:text-kred text-sm transition-colors"
                  >
                    kah.hr.club@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-smoke-600 text-xs uppercase tracking-widest mb-1">
                    인스타그램
                  </div>
                  <a
                    href="#"
                    className="text-smoke-400 hover:text-kred text-sm transition-colors"
                  >
                    @kah_hrclub
                  </a>
                </div>
                <div>
                  <div className="text-smoke-600 text-xs uppercase tracking-widest mb-1">
                    활동 기간
                  </div>
                  <span className="text-smoke-400 text-sm">
                    매 학기 정기 모임
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.3}>
          <div className="border-t border-ink-600/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-smoke-600 text-xs">
              © 2025 KAH — 인사관리 학회. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-smoke-600 hover:text-smoke-100 text-xs tracking-widest uppercase transition-colors group"
            >
              Back to top
              <ArrowUp
                size={13}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
