import { Wallet, Gem, CheckCircle, Fingerprint } from "lucide-react";
import StepCard from "@/components/StepCard";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-12">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <StepCard 
            step={1} 
            title="Connect Wallet" 
            description="Подключите свой MetaMask кошелек к нашему сайту" 
            icon={<Wallet size={24} />} 
          />
          <StepCard 
            step={2} 
            title="Select NFT" 
            description="Выберите количество NFT, которое хотите приобрести" 
            icon={<Gem size={24} />} 
          />
          <StepCard 
            step={3} 
            title="Confirm" 
            description="Подтвердите транзакцию в вашем кошельке" 
            icon={<CheckCircle size={24} />} 
          />
          <StepCard 
            step={4} 
            title="Get Unique Soul" 
            description="Получите свою уникальную цифровую душу Kitty" 
            icon={<Fingerprint size={24} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
