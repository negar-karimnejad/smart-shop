import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import Container from "./Container";

function Navbar() {
  return (
    <div className="bg-slate-200 sticky top-0 right-0 z-50 shadow-sm">
      <Container>
        <div className="py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-black text-white px-2 py-1">E</span>-Shop
          </Link>
          <form
            action=""
            className="rounded-md overflow-hidden hidden md:block"
          >
            <input
              className="bg-white px-2 py-1 outline-none text-gray-600 placeholder:text-gray-300"
              type="text"
              placeholder="Explore E-Shop"
            />
            <button
              type="submit"
              className="bg-slate-700 text-white px-2 py-1 transition-all hover:bg-slate-600"
            >
              Search
            </button>
          </form>
          <ul className="flex items-center gap-5 text-xl text-gray-800">
            <li className="relative">
              <Link href={"/cart"}>
                <PiShoppingCart className="text-2xl" />
                <span className="absolute bottom-4 pb-1 left-3 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white w-5 h-5">
                  5
                </span>
              </Link>
            </li>
            <li className="flex items-center border border-gray-400 px-2 py-1.5 rounded-full cursor-pointer">
              <LuUser2 />
              <MdArrowDropDown />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
