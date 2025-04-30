import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Пример трека для плеера (в реальном проекте будет массив треков)
const demoTrack = {
  title: "NFT Ambient",
  artist: "Kitty Music",
  src: "https://soundcloud.com/discover/sets/charts-top:ambient:week"
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Обновляем текущее время проигрывания
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    // Обновляем продолжительность трека
    const updateDuration = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    // Добавляем обработчики событий
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("loadedmetadata", updateDuration);
      audioRef.current.volume = volume / 100;
    }

    // Очищаем обработчики при размонтировании
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, [volume]);

  // Управление воспроизведением
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Функции для переключения треков (в будущих обновлениях)
  const prevTrack = () => {
    // Здесь будет логика переключения на предыдущий трек
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const nextTrack = () => {
    // Здесь будет логика переключения на следующий трек
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Изменение громкости
  const handleVolumeChange = (newValue: number[]) => {
    const newVolume = newValue[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  // Изменение позиции проигрывания
  const handleSeek = (newValue: number[]) => {
    const seekTime = newValue[0];
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  // Форматирование времени
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 bg-muted rounded-md p-3 border border-border animate-fade-in w-64 shadow-lg glow-border">
      <audio ref={audioRef} src={demoTrack.src} />
      
      <div className="mb-2">
        <h4 className="text-primary font-bold truncate text-sm">{demoTrack.title}</h4>
        <p className="text-muted-foreground text-xs">{demoTrack.artist}</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 0)}</span>
        </div>
        
        <Slider 
          value={[currentTime]} 
          max={duration || 100} 
          step={1} 
          onValueChange={handleSeek}
          className="my-2" 
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Button 
              onClick={prevTrack} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8"
            >
              <SkipBack size={16} />
            </Button>
            
            <Button 
              onClick={togglePlay} 
              size="icon" 
              variant="outline" 
              className="h-8 w-8 animate-pulse-glow border-primary"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
            
            <Button 
              onClick={nextTrack} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8"
            >
              <SkipForward size={16} />
            </Button>
          </div>
          
          <div className="flex items-center space-x-1 w-1/3">
            <Volume2 size={16} className="text-muted-foreground" />
            <Slider 
              value={[volume]} 
              max={100} 
              step={1} 
              onValueChange={handleVolumeChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
