import { FiPieChart } from "react-icons/fi";
import logo from "./../../../assets/imgs/SHORT LOGO.png";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

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
      <div className="flex flex-col flex-1 gap-12">
        <div className="text-[2.5rem] hover:text-primary my-4 cursor-pointer duration-300">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-black-60";
            }}
          >
            <HiHome />
          </NavLink>
        </div>
        <div className="text-[2.5rem] hover:text-primary cursor-pointer duration-300">
          <NavLink
            to="/dashboard/insights"
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-black-60";
            }}
          >
            <FiPieChart />
          </NavLink>
        </div>
      </div>
      <div className=" align-bottom">
        <div className="h-[4rem] w-[4rem] bg-success rounded-full"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
