import { Fingerprint, Gem, Milestone } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-12">
          Особенности коллекции
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="Уникальные черты" icon={<Fingerprint size={24} />}>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Редкая шерсть</span>
                  <span className="text-primary">12%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Золотые глаза</span>
                  <span className="text-primary">8%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Киберимпланты</span>
                  <span className="text-primary">5%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Легендарный фон</span>
                  <span className="text-primary">3%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '3%' }}></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard title="Утилити" icon={<Gem size={24} />}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-2 text-primary">
                  🏛️
                </div>
                <span className="text-sm">Доступ к DAO</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-2 text-primary">
                  👕
                </div>
                <span className="text-sm">Эксклюзивный мерч</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-2 text-primary">
                  🗳️
                </div>
                <span className="text-sm">Голосования</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-2 text-primary">
                  🎮
                </div>
                <span className="text-sm">Игровые активы</span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard title="Roadmap" icon={<Milestone size={24} />}>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-4">
                  <h4 className="font-bold">Запуск коллекции</h4>
                  <p className="text-sm text-muted-foreground">Минтинг 1000 уникальных NFT</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-4">
                  <h4 className="font-bold">Создание DAO</h4>
                  <p className="text-sm text-muted-foreground">Управление сообществом через голосования</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs">
                    3
                  </div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="pb-4">
                  <h4 className="font-bold">Метавселенная</h4>
                  <p className="text-sm text-muted-foreground">Интеграция в виртуальные миры</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Реальные события</h4>
                  <p className="text-sm text-muted-foreground">Эксклюзивные оффлайн-мероприятия для холдеров</p>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
