import React from "react";

const OutlineButton: React.FC<{
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center justify-center font-sora text-text py-3 px-8 rounded-xl oubordertline border-2 border-primary text-primary hover:bg-primary cursor-pointer hover:text-white duration-300`}
    >
      <div>{props.title}</div>
    </button>
  );
};

export default OutlineButton;

