import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
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
  );
};

export default Footer;
