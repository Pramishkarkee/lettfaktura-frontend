import React ,{useState} from "react";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoPrintSharp } from "react-icons/io5";
import { colors } from "../constants/colors";
import MyTable from "../Components/MyTable"
import { useMediaQuery } from "react-responsive";
const Products = () => {
  const [articlequery,setArticlequery]=useState('')
  const [productsquery,setProductsquery]=useState('')

  console.log(productsquery)

  const handleproductclick=()=>{
    alert('clciked')
  }
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });


  
  return (
    <div className="max-[1200px]:px-6 pl-[250px]">
      <div className="flex lg:justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center lg:px-[4%] px-[1%]  pt-[2%] mb-10">
        <div className="flex-shrink max-lg:justify-center w-full max-lg:items-center ">
          <Input setValue={setArticlequery} value={articlequery}  placeholder="Search Article No..."  />
          <Input setValue={setProductsquery} value={productsquery}  placeholder="Search Products..."  />
          
        </div>
        <div className="flex items-center h-full w-full max-lg:justify-center max-lg:mt-3  ">
          <Button handleClick={handleproductclick} title="New Product" Icon={<MdOutlineAddCircle size={!isMobile?16:24} color={colors.green}/>}  />
          <Button  handleClick={handleproductclick} title="Print List" Icon={<IoPrintSharp size={!isMobile?16:24} color={colors.primary}/>}/>
          <Button  handleClick={handleproductclick} title="Advanced mode" Icon={<MdOutlineAddCircle size={!isMobile?16:24}/>}/>
        </div>
       
      </div>
      <MyTable articelquery={articlequery} productquery={productsquery}/>
      

    </div>
  );
};

export default Products;
