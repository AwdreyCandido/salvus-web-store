import React from "react";
import { HiChevronDown, HiOutlineExclamationTriangle } from "react-icons/hi2";

type ListItem = {
  id: number;
  name: string;
};

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  items: ListItem[];
  errorMessage?: string
}

const SelectInput: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  onChange,
  items,
  value,
  onBlur,
  errorMessage
}) => {

  
  const selectStyle = errorMessage ? "border-danger bg-danger-light ring-danger" : "border-primary-light ring-primary"

  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <div className={`flex relative items-center max-h-[4rem] bg-gray rounded-2xl overflow-hidden flex-1 border-2 ${selectStyle}`}>
        <select
          name={name}
          onChange={onChange}
          defaultValue={value}
          onBlur={onBlur}
          className={`h-[4rem] bg-gray w-full appearance-none text-text px-4 py-2  outline-0 cursor-pointer ${errorMessage && "bg-danger-light"}`}
        >
          <option className="" disabled selected>
            {placeholder}
          </option>
          {items.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        <HiChevronDown className=" absolute text-h2  right-2" />
      </div>
      {errorMessage && (
        <div className="flex gap-3 items-center mt-1" >
          <HiOutlineExclamationTriangle className="text-danger text-[2.2rem]" />
          <p className="text-[1.5rem] text-danger font-dm">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
