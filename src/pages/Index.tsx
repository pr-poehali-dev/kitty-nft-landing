import { Separator } from "@/components/ui/separator";
import AudioPlayer from "@/components/AudioPlayer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Музыкальный плеер */}
      <AudioPlayer />

      {/* Шапка с навигацией */}
      <Header />

      {/* Hero секция */}
      <HeroSection />

      <Separator className="border-border" />

      {/* Особенности коллекции */}
      <FeaturesSection />

      <Separator className="border-border" />

      {/* Как это работает */}
      <HowItWorksSection />

      <Separator className="border-border" />

      {/* Статистика коллекции */}
      <StatsSection />

      <Separator className="border-border" />

      {/* FAQ */}
      <FaqSection />

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
