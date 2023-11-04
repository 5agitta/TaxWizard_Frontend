import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto w-full px-10 md:px-12 py-8 border-b-[2px] border-blue-700 bg-white">
      <div className="mx-60 hidden md:flex justify-between items-center gap-8">
        {/* TaxWizard */}
        <div className="flex justify-center items-center">
          <a href="/">
           <p className="text-3xl font-bold">TaxWizard</p> 
            <img src="" alt="" className="w-36" />
          </a>
        </div>
        {/* links */}
        <div>
          <ul className="flex justify-center items-center gap-4">
            {/*<li className="mr-5 text-xl hover:text-red-500 hover:border-b border-b-red-500 hover:font-bold duration-100">*/}
            {/*  <a href="/profile" className="">*/}
            {/*    Profile*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
        
      </div>
      {/* mobile display */}
      <div className="md:hidden flex justify-between items-center">
        <a href="/">
          <p className="text-3xl font-bold">TaxWizard</p> 
          <img src="" alt="" className="w-32" />
        </a>
        <div onClick={handleNav} className="md:hidden justify-end items-center cursor-pointer z-20">
          {nav ? (
            <AiOutlineClose className="" size={25} />
          ) : (
            <AiOutlineMenu className="" size={25} />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "block bg-white w-screen h-[42%] fixed top-0 left-0 duration-300 z-10"
            : "block bg-secondary w-[70%] h-[42%] fixed top-0 left-[-99999px] duration-300 z-10"
        }
      >
        <div className="flex felx-col justify-center">
          <a href="/">
           <p className="text-3xl font-bold">TaxWizard</p> 
            <img src="" alt="" className="w-32" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
