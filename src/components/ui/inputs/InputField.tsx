import React from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  errorMessage?: string
}

const InputField: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  onChange,
  type,
  maxLength,
  minLength,
  value,
  pattern,
  required,
  onBlur,
  errorMessage
}) => {

  const inputStyle = errorMessage ? "border-danger bg-danger-light ring-danger" : "border-primary-light ring-primary"

  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <input
        name={name}
        className={`h-[4rem] bg-gray px-4 py-2 rounded-2xl outline-0 border-2 ${inputStyle} `}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        defaultValue={value}
        required={required}
        pattern={pattern}
        onBlur={onBlur}
      />
      {errorMessage && (
        <div className="flex gap-3 items-top mt-1" >
          <HiOutlineExclamationTriangle className="text-danger text-[2.2rem]" />
          <p className="text-[1.5rem] text-danger font-dm">{errorMessage}</p>
        </div>
      )}
    </div>
  );

};

export default InputField;
