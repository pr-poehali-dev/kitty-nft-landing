import ConnectWalletButton from "@/components/ConnectWalletButton";
import MintButton from "@/components/MintButton";
import NftGridItem from "@/components/NftGridItem";

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

const HeroSection = () => {
  return (
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
              id={`${100 + index}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
