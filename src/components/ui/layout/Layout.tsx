import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="w-[7rem]">
        <Sidebar />
      </div>
      <section className="px-[4rem] py-[2rem] flex-1">{children}</section>
    </div>
  );
};

export default Layout;
