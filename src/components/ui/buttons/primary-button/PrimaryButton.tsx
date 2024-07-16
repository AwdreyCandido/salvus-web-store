import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  mode?: string;
  type?: "submit" | "reset" | "button" | undefined
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, mode, type, onClick }) => {

  const buttonStyle = mode && mode === "delete" ?
    "bg-danger border-2 border-danger text-white hover:bg-white cursor-pointer hover:text-danger" :
    "bg-primary border-2 border-primary text-white hover:bg-white cursor-pointer hover:text-primary"

  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center font-sora text-text py-4 px-8 rounded-xl  duration-300 ${buttonStyle}`}
    >
      <div>{title}</div>
    </button>
  );
};

export default PrimaryButton;
