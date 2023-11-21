import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 flex justify-between items-center h-20 text-slate-400 px-10">
        <div className="text-sm">
          <NavLink className="text-3xl" href="">
            Courses Academy
          </NavLink>
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
