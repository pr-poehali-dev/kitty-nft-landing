import { Fingerprint, Gem, Timeline, Wallet, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NftGridItem from "@/components/NftGridItem";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import MintButton from "@/components/MintButton";
import FaqAccordion from "@/components/FaqAccordion";
import AudioPlayer from "@/components/AudioPlayer";

// Временные изображения для NFT Grid
const nftImages = [
  "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627843240167-b2a5c8fc6044?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1702550812819-1fde0eb88c4a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1650439149411-f1ddb0920474?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621075160523-b936ad96132a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635468872214-8d30d6b0e879?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1646458440455-6127df63b8d7?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634979149798-e9a118734e93?q=80&w=400&auto=format&fit=crop"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Музыкальный плеер */}
      <AudioPlayer />

      {/* Шапка с навигацией */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-primary font-space font-bold text-2xl mr-2">KITTY</div>
            <span className="text-muted-foreground text-xs border border-border px-2 py-1 rounded">NFT</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#stats" className="hover:text-primary transition-colors">Stats</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <ConnectWalletButton />
        </div>
      </header>

      {/* Hero секция */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight glow-text">
              <span className="text-primary">Kitty</span> Collection
            </h1>
            <p className="text-xl text-muted-foreground">
              1000 уникальных цифровых душ, живущих в блокчейне
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <ConnectWalletButton />
              <MintButton />
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span>Минтинг активен | Уже отминчено: 423/1000</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {nftImages.slice(0, 9).map((image, index) => (
              <NftGridItem 
                key={index} 
                imageUrl={image} 
                id={`#${100 + index}`} 
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="border-border" />

      {/* Особенности коллекции */}
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

            <FeatureCard title="Roadmap" icon={<Timeline size={24} />}>
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

      <Separator className="border-border" />

      {/* Как это работает */}
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

      <Separator className="border-border" />

      {/* Статистика коллекции */}
      <section id="stats" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-12">
            Статистика коллекции
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md p-6 text-center">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Отминчено</h3>
              <div className="text-4xl font-bold mb-3 font-space">423/1000</div>
              <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '42.3%' }}></div>
              </div>
            </div>
            
            <div className="bg-muted rounded-md p-6 text-center">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Холдеров</h3>
              <div className="text-4xl font-bold mb-3 font-space">291</div>
              <div className="flex justify-center items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>+12 за последние 24 часа</span>
              </div>
            </div>
            
            <div className="bg-muted rounded-md p-6 text-center">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Цена пола</h3>
              <div className="text-4xl font-bold mb-3 font-space">0.25 ETH</div>
              <div className="flex justify-center items-center text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                <span>Объем торгов: 126 ETH</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-muted p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Динамика продаж</h3>
            <img 
              src="https://images.unsplash.com/photo-1642790551116-18e150f248e7?q=80&w=1200" 
              alt="Статистика продаж" 
              className="w-full h-48 object-cover rounded-md opacity-70" 
            />
          </div>
        </div>
      </section>

      <Separator className="border-border" />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-border py-10 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-primary font-space font-bold text-2xl mr-2">KITTY</div>
                <span className="text-muted-foreground text-xs border border-border px-2 py-1 rounded">NFT</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Коллекция уникальных цифровых душ, созданных для исследования границ Web3 и метавселенных.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Ссылки</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">OpenSea</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Smart Contract</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Разделы</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#features" className="hover:text-primary transition-colors">Особенности</a></li>
                  <li><a href="#how-it-works" className="hover:text-primary transition-colors">Как это работает</a></li>
                  <li><a href="#stats" className="hover:text-primary transition-colors">Статистика</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kitty NFT. Все права защищены.
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Powered by</span>
              <svg className="w-4 h-4 ml-2 mr-1" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <path fill="#00F0FF" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                <path fill="#00F0FF" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                <path fill="#00F0FF" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.601L256 236.587z" />
                <path fill="#00F0FF" d="M127.962 416.905v-104.72L0 236.585z" opacity=".5" />
                <path fill="#00F0FF" d="M127.961 287.958l127.96-75.637-127.96-58.162z" opacity=".2" />
                <path fill="#00F0FF" d="M0 212.32l127.96 75.638v-133.8z" opacity=".6" />
              </svg>
              <span>Ethereum</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
