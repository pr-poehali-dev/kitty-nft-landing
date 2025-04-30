import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const MintButton = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const price = 0.05; // Цена в ETH

  const handleMint = async () => {
    setIsMinting(true);
    
    // Имитация минта NFT
    try {
      // В реальном приложении здесь будет код для вызова смарт-контракта
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to mint:', error);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-transparent border-primary text-primary hover:bg-primary/10 font-space"
        >
          Mint Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Mint Kitty NFT</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Количество</label>
            <div className="flex items-center space-x-4">
              <Slider 
                value={[count]} 
                min={1} 
                max={10} 
                step={1} 
                onValueChange={(value) => setCount(value[0])} 
                className="flex-grow" 
              />
              <Input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min={1} 
                max={10} 
                className="w-16" 
              />
            </div>
          </div>
          
          <div className="space-y-2 py-2 border-y border-border">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Цена за 1 NFT</span>
              <span>{price} ETH</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Всего</span>
              <span className="text-primary">{(price * count).toFixed(3)} ETH</span>
            </div>
          </div>
          
          <Button 
            onClick={handleMint} 
            className="w-full" 
            disabled={isMinting}
          >
            {isMinting ? 'Минтинг...' : 'Подтвердить Mint'}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            * Минтинг NFT необратим и требует оплаты газа в сети Ethereum
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MintButton;
