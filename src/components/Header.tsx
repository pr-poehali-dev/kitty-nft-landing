import ConnectWalletButton from "@/components/ConnectWalletButton";

const Header = () => {
  return (
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
  );
};

export default Header;
