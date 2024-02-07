import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

function UserNav({ setIsOpen }) {
  return (
    <>
      <ul className="flex-1 flex items-center gap-8 text-2xl text-gray-800 justify-end">
        <li className="relative">
          <Link href={"/cart"}>
            <PiShoppingCart />
            <span className="absolute bottom-4 left-3 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white w-5 h-5">
              5
            </span>
          </Link>
        </li>
        <li
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center border border-gray-400 px-2 py-1.5 rounded-full cursor-pointer z-50"
        >
          <LuUser2 />
          <MdArrowDropDown />
        </li>
      </ul>
    </>
  );
}

export default UserNav;
