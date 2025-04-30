import { BarChart3 } from "lucide-react";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
