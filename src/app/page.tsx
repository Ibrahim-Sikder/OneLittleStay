import Header from "@/components/share/Header";
import HeroSection from "@/components/ui/home/HeroSection";
import TrustedCompanies from "@/components/ui/home/TrustedCompanies";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedCompanies />
    </main>
  );
}
