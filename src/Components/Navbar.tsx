import React, { useState, useEffect, useRef } from "react";
import avatar from "../assets/vectoravatar.png";
import norwayflag from "../assets/norwayflag.png";
import Sidebarmenu from "./Sidebarmenu";
import { useMediaQuery } from "react-responsive";
import { LuMenu } from "react-icons/lu";

import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const [openmenu, setOpenmenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (openmenu && ref.current && !ref.current.contains(e.target)) {
        setOpenmenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener for sidebar in mobile
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openmenu]);
  return (
    <>
      <div  className="bg-[#0e7ee8] w-full h-[80px] ">
        <div  className="flex justify-between lg:px-24 h-full w-full items-center px-12 ">
          {!isMobile ? (
            <div className="flex  ">
              <div className="relative w-10 h-10">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-full rounded-full h-full "
                />
                <span className="w-[8px] h-[8px] absolute bottom-2 right-0 bg-green-500 rounded-full"></span>
              </div>
              <div className="text-[#fff] ml-3 mt-[2px]">
                <h5 className="font-semibold text-sm">John Andre</h5>
                <p className="text-xs">Storfjord AS</p>
              </div>
            </div>
          ) : (
            <div onClick={() => setOpenmenu(true)}>
              <LuMenu size={32} color="white" />
            </div>
          )}

          <div className="flex gap-3 items-center">
            <p className="text-[#fff]">Norsk Bokmal</p>
            <div className="w-8  h-6">
              <img
                src={norwayflag}
                alt="norwayflag"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[240px] max-[1200px]:hidden h-[100vh]  fixed left-0 border-r-3 border-gray-200 shadow-md ">
        <Sidebarmenu />
      </div>

{openmenu && isMobile && (
        <div  className="fixed transition-all top-0 left-0 h-[100vh] w-full z-30 right-0 bottom-0">
          <div className="flex h-full w-full bg-black bg-opacity-40">
            <div className="bg-[#fff] min-w-[240px] relative h-full">
             <RxCross1 size={18} onClick={()=>{
              setOpenmenu(false)
             }} className="absolute right-2 mt-2"/>
              <Sidebarmenu setOpenmenu={setOpenmenu}/>
            </div>
           
          </div>
        </div>
      )}

      
    </>
  );
};

export default Navbar;
