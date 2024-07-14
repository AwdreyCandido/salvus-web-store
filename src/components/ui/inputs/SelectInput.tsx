import React from "react";
import { HiChevronDown } from "react-icons/hi2";

type ListItem = {
  id: number;
  name: string;
};

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  items: ListItem[];
}

const SelectInput: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  onChange,
  items,
  defaultValue,
}) => {
  return (
    <div className="flex gap-2 w-full my-4 flex-col font-sora text-text">
      <label className="text-h4">{label}</label>
      <div className="flex relative items-center h-[4rem] bg-gray rounded-2xl overflow-hidden flex-1 border-2 border-primary-light">
        <select
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          className="h-[4rem] bg-gray w-full appearance-none text-text px-4 py-2  outline-0 "
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
    </div>
  );
};

export default SelectInput;
