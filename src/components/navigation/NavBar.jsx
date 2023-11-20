import { NavLink } from "react-router-dom";

const links = [];

const NavBar = () => {
  return (
    <div className="hidden md:block">
      <ul className="  flex items-center justify-around text-neutral-600 lg:mx-80">
        {links.map(({ id, link, title, icon, mobileOnly }) => {
          return (
            !mobileOnly && (
              <li key={id}>
                <NavLink href={`${link}` || "/"}>
                  <div className=" flex  w-40 flex-col items-center justify-center">
                    <div className="absolute top-[21px]  block">{icon}</div>
                    <div className="flex items-center justify-between gap-2">
                      <div className=" text-md font-semibold text-gray-200">
                        {links[title]}
                      </div>
                    </div>
                  </div>
                  {/* {isSubMenu === link && (
                  <div
                    className="items-top absolute flex h-[300px] w-40   justify-center rounded-b-md bg-primary-color"
                    onClick={() => {}}
                  >
                    <ChevronDown
                      strokeWidth="3px"
                      size="20px"
                      color="var(--button-primary-color)"
                    />
                  </div>
                )} */}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
