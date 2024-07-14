import React from "react";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {}

const TextField: React.FC<TextareaProps> = ({ name, label, placeholder }) => {
  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <textarea
        name={name}
        maxLength={800}
        className="h-[14rem] resize-none bg-gray px-4 py-2 rounded-2xl outline-0 border-2 border-primary-light ring-primary"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
