import { NavLink } from "react-router-dom";

const links = [
  { title: "Home Page", link: "/", icon: "" },
  { title: "Courses", link: "/courses", icon: "" },
  { title: "FAQ", link: "/FAQ", icon: "" },
];

const NavBar = () => {
  return (
    <div className="block">
      <ul className="flex items-center justify-around text-neutral-600  bg-slate-600 w-screen py-2">
        {links.map(({ id, link, title }) => {
          return (
            <li key={id}>
              <NavLink to={`${link}` || "/"}>
                <div className=" flex  w-40 flex-col items-center justify-center">
                  <div className="flex items-center justify-between gap-2">
                    <div className=" text-md font-semibold text-gray-200">
                      {title}
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
