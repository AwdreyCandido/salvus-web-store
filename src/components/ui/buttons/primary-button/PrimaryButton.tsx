import React from "react";

const PrimaryButton: React.FC<{
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-sora text-text bg-primary py-4 px-8 rounded-xl oubordertline border-2 border-primary text-white hover:bg-white cursor-pointer hover:text-primary duration-300`}
    >
      <div>{title}</div>
    </button>
  );
};

export default PrimaryButton;
