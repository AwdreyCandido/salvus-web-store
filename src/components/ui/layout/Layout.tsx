import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <Sidebar />
      <section className="px-[4rem] py-[2rem]">{children}</section>
    </div>
  );
};

export default Layout;
