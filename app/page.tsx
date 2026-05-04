import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-900">
      <Navbar />
      <Hero />
      <About />
      <Recruitment />
      <Footer />
    </main>
  );
}
