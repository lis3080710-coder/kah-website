"use client";

import { BarChart3, Users, BookOpen, Lightbulb, Target, TrendingUp } from "lucide-react";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SlideIn,
} from "./ui/AnimatedWrapper";

const activities = [
  {
    icon: BarChart3,
    title: "피플 애널리틱스",
    description:
      "데이터 기반 HR 의사결정 연구. 실제 기업 HR 데이터를 분석하고 인사이트를 도출하는 프로젝트를 통해 실무 역량을 키웁니다.",
    tags: ["Python", "R", "데이터 시각화", "통계 분석"],
  },
  {
    icon: Users,
    title: "조직문화 스터디",
    description:
      "국내외 선진 기업의 조직문화를 연구하고 분석합니다. 케이스 스터디와 현직자 세미나를 통해 깊이 있는 HR 인사이트를 쌓습니다.",
    tags: ["케이스 스터디", "세미나", "기업탐방", "그룹 토론"],
  },
  {
    icon: BookOpen,
    title: "HR 직무 역량 강화",
    description:
      "채용, 성과관리, 보상, 교육·개발 등 HR 핵심 직무를 체계적으로 학습합니다. 현직 HR 전문가 멘토링 프로그램도 운영합니다.",
    tags: ["채용 전략", "성과관리", "L&D", "보상체계"],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "혁신적 사고",
    desc: "전통적 HR의 경계를 넘어 새로운 관점으로 인사관리를 재정의합니다.",
  },
  {
    icon: Target,
    title: "데이터 중심",
    desc: "직관이 아닌 데이터와 근거에 기반한 HR 의사결정을 지향합니다.",
  },
  {
    icon: TrendingUp,
    title: "지속 성장",
    desc: "구성원 각자의 성장이 학회 전체의 발전으로 이어지는 선순환을 만듭니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <FadeIn delay={0}>
            <span className="text-kred text-xs tracking-ultra uppercase font-medium">
              About KAH
            </span>
          </FadeIn>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-smoke-100 leading-tight max-w-xl">
                HR의 미래를
                <br />
                함께 <span className="text-gradient-red">설계</span>합니다
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-smoke-600 leading-relaxed max-w-sm text-sm md:text-base">
                KAH는 데이터 기반의 HR 전문가를 육성하기 위해 설립된
                대학생 인사관리 학회입니다. 이론과 실무의 간극을 좁히며,
                미래 HR 리더를 양성합니다.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Activity Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <StaggerItem key={act.title}>
                <div className="group bg-ink-700 border border-ink-600/80 p-8 card-hover cursor-default h-full flex flex-col">
                  <div className="w-11 h-11 bg-kred/10 border border-kred/20 flex items-center justify-center mb-6">
                    <Icon size={20} className="text-kred" />
                  </div>
                  <h3 className="text-smoke-100 font-semibold text-lg mb-3">
                    {act.title}
                  </h3>
                  <p className="text-smoke-600 text-sm leading-relaxed mb-6 flex-1">
                    {act.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {act.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1 border border-ink-500 text-smoke-600 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Divider */}
        <FadeIn delay={0}>
          <div className="border-t border-ink-600/50 mb-20" />
        </FadeIn>

        {/* Values Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16" id="activities">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <FadeUp key={v.title} delay={i * 0.12}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-kred/10 border border-kred/20 flex items-center justify-center mt-1">
                    <Icon size={18} className="text-kred" />
                  </div>
                  <div>
                    <h4 className="text-smoke-100 font-semibold mb-2">
                      {v.title}
                    </h4>
                    <p className="text-smoke-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Large Quote */}
        <div className="mt-28">
          <SlideIn delay={0.1}>
            <div className="border-l-2 border-kred pl-8 max-w-3xl">
              <blockquote className="text-2xl md:text-3xl font-light text-smoke-200 leading-relaxed italic">
                "People are not your most important asset.
                <br />
                The right people are."
              </blockquote>
              <cite className="mt-4 block text-smoke-600 text-sm tracking-widest uppercase not-italic">
                — Jim Collins, Good to Great
              </cite>
            </div>
          </SlideIn>
        </div>

      </div>
    </section>
  );
}
