import type { ReactNode } from "react";
import type React from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} bg-white p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
    >
      {children}
    </div>
  );
};

export default Card;
