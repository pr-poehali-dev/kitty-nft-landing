import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ConnectWalletButton = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Имитация подключения MetaMask
    try {
      // В реальном приложении здесь будет код для подключения к MetaMask
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Проверка наличия MetaMask в window.ethereum
      if (typeof window !== 'undefined' && window.ethereum) {
        // Здесь будет вызов ethereum.request({ method: 'eth_requestAccounts' })
        console.log('Connected to MetaMask');
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <>
      <Button 
        onClick={handleConnect} 
        className="bg-primary hover:bg-primary/90 text-white rounded-sm uppercase tracking-wider font-medium text-sm"
        disabled={isConnecting}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isConnecting ? 'Подключение...' : 'Connect'}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card">
          <DialogHeader>
            <DialogTitle className="text-center text-xl azuki-heading">MetaMask не найден</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-muted-foreground">
              Для взаимодействия с коллекцией Kitty необходим кошелек MetaMask.
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://metamask.io/download/', '_blank')}
              className="w-full border-primary text-primary hover:bg-primary/10"
            >
              Установить MetaMask
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConnectWalletButton;
