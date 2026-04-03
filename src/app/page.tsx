import FooterSection from "@/components/share/footer/Footer";
import Header from "@/components/share/Header";
import Brand from "@/components/ui/home/Brand/Brand";
import ChooseUs from "@/components/ui/home/Choose/ChooseUs";
import EasySection from "@/components/ui/home/EasySection";
import FAQSection from "@/components/ui/home/FaqSection";
import HeroSection from "@/components/ui/home/HeroSection";
import PricingSection from "@/components/ui/home/pricing/PricingSection";
import Review from "@/components/ui/home/review/Review";
import ServiceSection from "@/components/ui/home/services/ServiceSection";
import ToolSection from "@/components/ui/home/ToolSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Brand />
      <PricingSection />
      <ServiceSection />
      <ToolSection />
      <EasySection />
      <ChooseUs />
      <Review />
      <FAQSection />
    </main>
  );
}
