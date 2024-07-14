import React from "react";
import logo from "./../../../assets/imgs/SHORT LOGO.png";
import { HiHome } from "react-icons/hi";

const Sidebar = () => {
  const expandNav = false;

  return (
    <nav
      className={`text-black-40 z-[2] flex items-center flex-col py-8  min-h-screen bg-white rounded-r-[2rem] shadow-xl ${
        expandNav ? "w-fit" : "w-[7rem]"
      }`}
    >
      <div className="w-[3.5rem]">
        <img src={logo} />
      </div>
      <div className="w-[80%] h-[1px] my-8 bg-black-20"></div>
      <div className="flex-1">
        <div className="text-[2.5rem] hover:text-primary mt-4 cursor-pointer duration-300">
          <HiHome />
        </div>
      </div>
      <div className=" align-bottom">
        <div className="h-[4rem] w-[4rem] bg-success rounded-full"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
