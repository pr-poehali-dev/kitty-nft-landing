import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const FeatureCard = ({ title, children, icon }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-sm p-5 border-l-2 border-primary hover:border-l-4 transition-all duration-300 h-full">
      <div className="flex items-center mb-5">
        {icon && <div className="mr-3 text-primary">{icon}</div>}
        <h3 className="text-xl font-bold text-white uppercase tracking-wide">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FeatureCard;
