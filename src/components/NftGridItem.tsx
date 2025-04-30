import { useState } from 'react';

interface NftGridItemProps {
  imageUrl: string;
  id: string;
}

const NftGridItem = ({ imageUrl, id }: NftGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="aspect-square bg-muted relative overflow-hidden rounded-sm azuki-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={`Kitty NFT #${id}`} 
        className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-end transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-primary font-space text-sm font-bold">Kitty #{id}</p>
        <div className="flex items-center text-xs text-white/80 mt-1">
          <span>Редкость: </span>
          <div className="ml-1 w-12 h-1.5 bg-black/30 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: Math.floor(Math.random() * 100) + '%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftGridItem;
