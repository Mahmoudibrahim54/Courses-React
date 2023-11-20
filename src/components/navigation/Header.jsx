import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-900 flex justify-between items-center h-20 text-slate-400 px-10">
      <div className="text-sm">
        <NavLink className="text-3xl" href="">
          Courses Academy
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
