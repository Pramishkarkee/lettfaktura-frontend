import React from "react";
import { Divider } from "../utils/Divider";
import { IoMdDocument } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoIosCloseCircle } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { CgLoadbarDoc } from "react-icons/cg";
import { IoIosCloudUpload } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { NavLink, useLocation, Link } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
const listitems = [
  {
    name: "Invoices",
    Icon: <IoMdDocument size={24} color="#9bfffb" />,
    path: "/invoices",
  },
  {
    name: "Customers",
    Icon: <FaUserLarge size={24} color="#adffe7" />,
    path: "/customers",
  },
  {
    name: "My Bussiness",
    Icon: <CiSettings size={24} color="#cbfcfb" />,
    path: "/setting",
  },
  {
    name: "Invoice Journal",
    Icon: <FaBook size={24} color="#98e2ed" />,
    path: "/invoicejournal",
  },
  {
    name: "Price List",
    Icon: <FaTag size={24} color="#faa436" />,
    path: "/pricelists",
  },
  {
    name: "Multiple Invoicing",
    Icon: <LiaFileInvoiceSolid size={24} color="#86e8f3" />,
    path: "/multipleinvoice",
  },
  {
    name: "Unpaid invoices",
    Icon: <IoIosCloseCircle size={24} color="#ed72a4" />,
    path: "/unpaidinvoices",
  },
  {
    name: "Offer",
    Icon: <MdLibraryBooks size={24} color="#f3e9a1" />,
    path: "/offers",
  },
  {
    name: "Inventory Control",
    Icon: <RiDeleteBinLine size={24} color="#3a9ff0" />,
    path: "/control",
  },
  {
    name: "Member Invoicing",
    Icon: <CgLoadbarDoc size={24} color="#93b0e1" />,
    path: "/members",
  },
  {
    name: "Import/Export",
    Icon: <IoIosCloudUpload size={24} color="#def7f2" />,
    path: "/importexport",
  },
  {
    name: "Logout",
    Icon: <TbLogout size={24} />,
    path: "/",
  },
];

const Sidebarmenu = ({setOpenmenu}:any) => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <div className="flex justify-center w-full h-full flex-col ">
      <div className="flex flex-col  w-full items-center gap-3 mt-2 ">
        <h4 className=" font-[500] text-lg">Menu</h4>
        <Divider />
      </div>
      <div className="flex flex-col w-full h-full items-start gap-4 pl-[10%] mt-6">
        {listitems?.map((list) => (
          <>
            <Link onClick={()=>{
              if(isMobile){
                setOpenmenu(false)
              }
            }} to={list.path} className="flex gap-4 items-center relative">
              {pathname === `${list?.path}` ? (
                
                <FaDotCircle className="absolute left-[-18px]" size={14} color="#1fb43e" />
              ) : (
                ""
              )}
              <span >{list.Icon}</span>

              <p>{list.name}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebarmenu;
