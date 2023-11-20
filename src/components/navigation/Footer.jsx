import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-slate-900">
    <div className="relative z-20 flex justify-between h-32 px-10 py-8 i"  >
      <div className="text-slate-300 flex flex-col items-start">
        <div className="text-xl font-extrabold">
          Visit Our New Courses
        </div>
        <div className="text-2xl font-extrabold">
          Enjoy 20% discount
        </div>
        <p className="mt-2 max-w-md text-lg">
          Find new horizons
        </p>
      </div>


      </div>
            <div className="mt-6 flex flex-col flex-wrap justify-between gap-4 text-slate-300 md:flex-row ">
       

            <div className="mt-16 flex flex-wrap items-center  justify-between gap-4 border-t py-3 text-slate-300 w-screen px-10">
              <div className="text-sm">
                <NavLink
                  className="underline underline-offset-4"
                  href="https://www.linkedin.com/in/mahmoud-m-ibrahim/"
                >
                  Mahmoud Ibrahim
                </NavLink>
              </div>
              <div className="text-sm text-neutral-400">
                Copy Rights Reserved | {new Date().getFullYear()}
              </div>
            </div>
            </div>
            </div>
 )
}

export default Footer