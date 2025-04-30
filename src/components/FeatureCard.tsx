import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const FeatureCard = ({ title, children, icon }: FeatureCardProps) => {
  return (
    <div className="bg-muted rounded-md p-5 border border-border hover:border-primary/50 transition-colors duration-300 h-full">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-primary">{icon}</div>}
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FeatureCard;
