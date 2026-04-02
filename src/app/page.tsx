import FooterSection from "@/components/share/Footer";
import Header from "@/components/share/Header";
import ChooseUs from "@/components/ui/home/ChooseUs";
import EasySection from "@/components/ui/home/EasySection";
import FAQSection from "@/components/ui/home/FaqSection";
import HeroSection from "@/components/ui/home/HeroSection";
import PricingSection from "@/components/ui/home/PricingSection";
import Review from "@/components/ui/home/Review";
import ServiceSection from "@/components/ui/home/ServiceSection";
import ToolSection from "@/components/ui/home/ToolSection";
import TrustedCompanies from "@/components/ui/home/TrustedCompanies";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedCompanies />
      <PricingSection />
      <ServiceSection />
      <ToolSection />

      <EasySection />
      <ChooseUs />
      <Review />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
