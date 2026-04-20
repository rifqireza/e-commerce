import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
  className?: string;
  inputClassName?: string;
  startIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  inputClassName = "",
  type = "text",
  id,
  startIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="block uppercase text-black text-sm font-bold mb-1.5"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none text-gray-400">
            {startIcon}
          </div>
        )}

        <input
          id={id}
          type={inputType}
          name={id}
          className={`w-full py-4 px-4 placeholder-[#9c9d9d] font-normal outline-none ${error ? "text-red-500" : "text-black"} border-4 border-black font-black uppercase italic bg-gray-200
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${isPassword ? "pr-10" : ""}
            ${startIcon ? "pl-10" : ""}
            ${inputClassName}`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            {showPassword ? (
              <FiEye
                className={`${error ? "text-red-500" : "text-black"} w-5 h-5 mr-2`}
              />
            ) : (
              <FiEyeOff
                className={`${error ? "text-red-500" : "text-black"} w-5 h-5 mr-2`}
              />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 uppercase italic text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
