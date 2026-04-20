import type React from "react";
import { ImSpinner2 } from "react-icons/im";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "default";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loadingText?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  isLoading = false,
  startIcon,
  endIcon,
  loadingText,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black uppercase active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-75";

  const variantClasses = {
    primary: "bg-green-400 text-black",
    secondary: "bg-white text-black",
    danger: "bg-red-600 text-white",
    default: "bg-white text-gray",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-16 py-8 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${variant === "danger" && size === "md" ? "p-1" : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {isLoading && <ImSpinner2 className="w-4 h-4 animate-spin mr-2" />}
      {isLoading && loadingText ? (
        loadingText
      ) : (
        <>
          {!isLoading && startIcon && (
            <span className={`${children ? "mr-2" : ""} flex items-center`}>
              {startIcon}
            </span>
          )}

          {children}

          {!isLoading && endIcon && (
            <span className={`${children ? "mr-2" : ""} flex items-center`}>
              {endIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
