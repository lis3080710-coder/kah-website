"use client";

import { useState } from "react";
import {
  Megaphone,
  FlaskConical,
  LineChart,
  Clapperboard,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "./ui/AnimatedWrapper";
import { motion, AnimatePresence } from "framer-motion";

const positions = [
  {
    id: "planning",
    team: "기획팀",
    en: "Planning",
    icon: Clapperboard,
    spots: "2명",
    desc: "학회 전략 수립, 행사 기획, 운영 전반을 담당합니다. 창의적인 아이디어와 실행력을 갖춘 분을 찾습니다.",
    tasks: ["연간 활동 기획 및 운영", "대외 행사 기획 및 진행", "학회 전략 방향 설정", "타 학회/기업 협력 관계 관리"],
    preferred: ["PM 경험 또는 관심", "세심한 계획 수립 능력", "팀 커뮤니케이션 역량"],
  },
  {
    id: "pr",
    team: "홍보팀",
    en: "PR & Marketing",
    icon: Megaphone,
    spots: "2명",
    desc: "SNS 콘텐츠 기획·제작, 브랜딩, 외부 홍보 활동을 통해 KAH의 목소리를 세상에 알립니다.",
    tasks: ["SNS 채널 운영 (Instagram, LinkedIn)", "홍보 콘텐츠 기획 및 제작", "학회 브랜딩 아이덴티티 관리", "채용 및 행사 홍보 캠페인"],
    preferred: ["디자인 툴 활용 (Figma, Canva)", "카피라이팅 역량", "트렌드 감각과 창의력"],
  },
  {
    id: "academic",
    team: "학술팀",
    en: "Academic",
    icon: FlaskConical,
    spots: "2명",
    desc: "HR 최신 트렌드 연구, 케이스 스터디, 세미나 기획 및 논문 리뷰 등 학술 활동 전반을 이끕니다.",
    tasks: ["HR 이슈 리서치 및 보고서 작성", "외부 전문가 세미나 기획", "케이스 스터디 진행", "학회지 편집 및 발간"],
    preferred: ["HR·경영학 관련 전공 우대", "리서치 및 글쓰기 역량", "비판적 사고력"],
  },
  {
    id: "data",
    team: "데이터분석팀",
    en: "People Analytics",
    icon: LineChart,
    spots: "2명",
    desc: "피플 애널리틱스 프로젝트를 수행합니다. 데이터로 HR 문제를 해결하는 실무 역량을 키울 수 있습니다.",
    tasks: ["HR 데이터 수집·분석 프로젝트", "데이터 시각화 대시보드 제작", "분석 결과 발표 및 보고서 작성", "통계 방법론 스터디 운영"],
    preferred: ["Python / R 기초 이상", "통계·데이터 분석 관심", "SQL 또는 엑셀 활용 가능"],
  },
];

const requirements = [
  "HR 및 조직에 대한 진정한 관심과 열정",
  "데이터 기반의 논리적 사고방식",
  "협업과 커뮤니케이션을 즐기는 태도",
  "학기 중 정기 모임 참석 가능 (주 1회)",
  "학부생 또는 대학원생 (전공 무관)",
];

const processSteps = [
  {
    step: "01",
    title: "서류 전형",
    period: "~D+7",
    desc: "온라인 지원서 및 자기소개서 제출. 지원 동기와 HR에 대한 관심을 중심으로 작성해 주세요.",
  },
  {
    step: "02",
    title: "1차 면접",
    period: "D+10",
    desc: "팀별 직무 역량 면접. 지원 팀과의 핏(Fit)을 확인하는 30분 면접입니다.",
  },
  {
    step: "03",
    title: "2차 면접",
    period: "D+14",
    desc: "임원진 최종 면접. 학회 전반에 대한 이해도와 성장 가능성을 평가합니다.",
  },
  {
    step: "04",
    title: "최종 합격",
    period: "D+16",
    desc: "합격자 발표 및 OT 안내. 새로운 KAH 멤버로 공식 합류합니다.",
  },
];

function PositionCard({
  pos,
  isOpen,
  onToggle,
}: {
  pos: (typeof positions)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = pos.icon;
  return (
    <div
      className={`border transition-all duration-300 ${
        isOpen
          ? "border-kred/50 bg-ink-700"
          : "border-ink-600/70 bg-ink-700 hover:border-ink-500"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-11 h-11 flex items-center justify-center transition-colors ${
              isOpen ? "bg-kred" : "bg-kred/10 group-hover:bg-kred/20"
            }`}
          >
            <Icon size={18} className={isOpen ? "text-white" : "text-kred"} />
          </div>
          <div className="text-left">
            <div className="text-smoke-100 font-semibold">{pos.team}</div>
            <div className="text-smoke-600 text-xs tracking-widest uppercase mt-0.5">
              {pos.en}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:block text-right">
            <div className="text-smoke-400 text-xs mb-0.5">모집 인원</div>
            <div className="text-kred font-semibold text-sm">{pos.spots}</div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={18} className="text-smoke-600" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-ink-600/50 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-smoke-400 text-sm leading-relaxed mb-5">
                  {pos.desc}
                </p>
                <div>
                  <div className="text-smoke-100 text-xs tracking-widest uppercase mb-3 font-medium">
                    주요 업무
                  </div>
                  <ul className="space-y-2">
                    {pos.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <ArrowRight
                          size={13}
                          className="text-kred mt-0.5 flex-shrink-0"
                        />
                        <span className="text-smoke-600 text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-smoke-100 text-xs tracking-widest uppercase mb-3 font-medium">
                  우대사항
                </div>
                <ul className="space-y-2">
                  {pos.preferred.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <Check
                        size={13}
                        className="text-kred mt-0.5 flex-shrink-0"
                      />
                      <span className="text-smoke-600 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Recruitment() {
  const [openId, setOpenId] = useState<string | null>("planning");

  return (
    <section
      id="recruitment"
      className="py-28 md:py-36 bg-ink-800 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kred/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <FadeIn>
            <span className="text-kred text-xs tracking-ultra uppercase font-medium">
              Rolling Recruitment
            </span>
          </FadeIn>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-smoke-100 leading-tight">
                지금 KAH와
                <br />
                <span className="text-gradient-red">함께하세요</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex items-center gap-3 px-5 py-3 bg-kred/10 border border-kred/30">
                <span className="w-2 h-2 rounded-full bg-kred animate-pulse" />
                <span className="text-kred text-sm font-medium">
                  2025 하반기 수시채용 진행 중
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Position Cards */}
        <div className="mb-24">
          <FadeUp delay={0.1}>
            <h3 className="text-smoke-400 text-xs tracking-ultra uppercase font-medium mb-6">
              모집 포지션
            </h3>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="space-y-3">
              {positions.map((pos) => (
                <PositionCard
                  key={pos.id}
                  pos={pos}
                  isOpen={openId === pos.id}
                  onToggle={() =>
                    setOpenId(openId === pos.id ? null : pos.id)
                  }
                />
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Requirements */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn>
              <h3 className="text-smoke-400 text-xs tracking-ultra uppercase font-medium mb-6">
                지원 자격 및 인재상
              </h3>
            </FadeIn>
            <FadeUp delay={0.1}>
              <h4 className="text-2xl md:text-3xl font-bold text-smoke-100 mb-8 leading-snug">
                HR을 사랑하는
                <br />
                모든 분을 환영합니다
              </h4>
            </FadeUp>
            <StaggerContainer className="space-y-4">
              {requirements.map((req) => (
                <StaggerItem key={req}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-kred/10 border border-kred/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-kred" />
                    </div>
                    <span className="text-smoke-400 text-sm leading-relaxed">
                      {req}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScaleIn delay={0.2}>
            <div className="bg-ink-700 border border-ink-600/70 p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-kred text-xs tracking-ultra uppercase font-medium mb-4">
                  지원 안내
                </div>
                <h4 className="text-xl font-semibold text-smoke-100 mb-6">
                  지원서는 구글 폼으로
                  <br />
                  제출해 주세요.
                </h4>
                <ul className="space-y-3 text-sm text-smoke-600">
                  <li className="flex items-center gap-3">
                    <ArrowRight size={13} className="text-kred flex-shrink-0" />
                    모집 기간: 상시 (포지션별 마감)
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight size={13} className="text-kred flex-shrink-0" />
                    전공 무관, 누구나 지원 가능
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight size={13} className="text-kred flex-shrink-0" />
                    면접은 온라인/오프라인 병행
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight size={13} className="text-kred flex-shrink-0" />
                    결과는 개별 연락 예정
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-ink-500/50">
                <button className="w-full py-4 bg-kred hover:bg-kred-light text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group">
                  지원서 작성하기
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Process Timeline */}
        <div>
          <FadeIn>
            <h3 className="text-smoke-400 text-xs tracking-ultra uppercase font-medium mb-6">
              채용 프로세스
            </h3>
          </FadeIn>
          <FadeUp delay={0.1}>
            <h4 className="text-2xl md:text-3xl font-bold text-smoke-100 mb-14">
              단계별 안내
            </h4>
          </FadeUp>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <StaggerContainer className="relative">
              {/* Connecting line */}
              <div className="absolute top-7 left-7 right-7 h-px bg-ink-500/80" />
              <div className="grid grid-cols-4 gap-6">
                {processSteps.map((s, i) => (
                  <StaggerItem key={s.step}>
                    <div className="relative">
                      {/* Step indicator */}
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-ink-900 border-2 border-kred flex items-center justify-center z-10 relative">
                          <span className="text-kred font-bold text-sm">
                            {s.step}
                          </span>
                        </div>
                      </div>
                      <div className="text-smoke-400 text-xs tracking-widest uppercase mb-2">
                        {s.period}
                      </div>
                      <h5 className="text-smoke-100 font-semibold mb-3">
                        {s.title}
                      </h5>
                      <p className="text-smoke-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-0">
            {processSteps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-ink-900 border-2 border-kred flex items-center justify-center flex-shrink-0">
                      <span className="text-kred font-bold text-xs">
                        {s.step}
                      </span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px flex-1 bg-ink-500/50 my-2 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-smoke-600 text-xs tracking-widest uppercase mb-1">
                      {s.period}
                    </div>
                    <h5 className="text-smoke-100 font-semibold mb-2">
                      {s.title}
                    </h5>
                    <p className="text-smoke-600 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
