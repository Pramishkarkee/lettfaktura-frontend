import React from "react";
import { CiSearch } from "react-icons/ci";
import { colors } from "../constants/colors";
interface Iprops {
  placeholder: string;
  setValue: (value: string) => void;
  value: string;
}
const Input = ({ placeholder, setValue, value }: Iprops) => {
  return (
    <div className="border-[1px] border-[#f8f8f8] rounded-full  max-lg:w-full w-[300px]  max-lg:py-2 py-1 flex items-center justify-between px-3 gap-2 mb-2  ">
      <input
        placeholder={placeholder}
        onChange={(e)=>setValue(e.target.value)}
        className="outline-none text-black flex-1"
      />
      <CiSearch size={24} color={colors.primary} />
    </div>
  );
};

export default Input;
