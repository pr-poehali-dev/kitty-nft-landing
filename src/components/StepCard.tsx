import { ReactNode } from 'react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4 hover-scale">
      <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-full mb-2 border border-primary/30 text-primary">
        {icon}
      </div>
      <div className="text-xs uppercase tracking-wider text-primary/70 font-bold">Шаг {step}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default StepCard;
