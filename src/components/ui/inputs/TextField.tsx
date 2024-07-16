import React from "react";
import { HiOutlineExclamationTriangle, HiStopCircle } from "react-icons/hi2";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  errorMessage?: string
}

const TextField: React.FC<TextareaProps> = ({ name, label, placeholder, onChange, onBlur, value, errorMessage }) => {

  const textareaStyle = errorMessage ? "border-danger bg-danger-light ring-danger" : "border-primary-light ring-primary"

  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <textarea
        name={name}
        maxLength={800}
        className={`h-[14rem] resize-none bg-gray px-4 py-2 rounded-2xl outline-0 border-2 ${textareaStyle}`}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
        onBlur={onBlur}
      />
      {errorMessage && (
        <div className="flex gap-3 items-center mt-1" >
          <HiOutlineExclamationTriangle className="text-danger text-[2.2rem]" />
          <p className="text-[1.5rem] text-danger font-dm">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;
