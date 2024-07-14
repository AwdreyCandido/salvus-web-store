import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const InputField: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  onChange,
  type,
  maxLength,
  minLength,
}) => {
  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <input
        name={name}
        className="h-[4rem] bg-gray px-4 py-2 rounded-2xl outline-0 border-2 border-primary-light ring-primary"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};

export default InputField;
