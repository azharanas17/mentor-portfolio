// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#10b981] dark:text-[#10b981] text-3xl font-bold">
            Erwin Indra
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#license"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">LICENSE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-sm dark:text-black text-slate-900 transition-colors duration-300 hover:text-[#10b981]">CONTACT</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;