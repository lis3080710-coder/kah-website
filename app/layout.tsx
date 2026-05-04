import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAH — 인사관리 학회",
  description:
    "Data-driven HR을 선도하는 인사관리 학회 KAH. 조직문화, 피플 애널리틱스, HR 역량 강화를 위한 대학생 전문 학회입니다.",
  keywords: ["인사관리", "HR", "학회", "피플 애널리틱스", "조직문화", "KAH"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
