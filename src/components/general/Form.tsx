import type { ReactNode } from "react";
import type React from "react";

interface FormProps {
  children: ReactNode;
  className?: string;
  onFinish?: (data: Object) => void;
}

const Form: React.FC<FormProps> = ({ children, className, onFinish }) => {
  const onSubmit = (e: React.BaseSyntheticEvent | SubmitEvent) => {
    (e as React.BaseSyntheticEvent).preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    if (onFinish) {
      onFinish(formValues);
    }
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
