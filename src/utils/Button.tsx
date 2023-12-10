import React from "react";
import { useMediaQuery } from "react-responsive";
interface Iprops {
  title: string;
  handleClick: () => void;
  Icon: any;
}
const Button = ({ handleClick, title, Icon }: Iprops) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <button
      onClick={handleClick}
      className="border-[1px] py-2 border-[#f8f8f8] w-[180px] rounded-full flex items-center justify-center gap-1  px-3 mx-2"
    >
      {!isMobile ? title : ""}
      <span>{Icon}</span>
    </button>
  );
};

export default Button;
