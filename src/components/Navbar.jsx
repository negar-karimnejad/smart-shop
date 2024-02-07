"use client";

import Link from "next/link";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import Categories from "./Categories";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const user = true;
  const isAdmin = true;

  return (
    <>
      <div className="bg-slate-200 sticky top-0 right-0 z-50">
        <Container>
          <div className="py-5 flex justify-between items-center">
            <Link href="/" className="flex-1 text-2xl font-bold">
              <span className="bg-black text-white px-2 py-1">E</span>-Shop
            </Link>
            <form className="flex-1 rounded-md overflow-hidden hidden md:flex max-w-full">
              <input
                className="w-full bg-white p-2 outline-none text-gray-600"
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
          </div>
        </Container>
        <Categories />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 w-full h-screen bg-gray-200/60 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-16 right-4 bg-white z-50 text-sm rounded-md p-4 w-44 shadow-md shadow-gray-500 flex flex-col gap-4"
          >
            {user ? (
              <>
                <Link href={"/orders"}>Your Orders</Link>
                {isAdmin && <Link href={"/dashboard"}>Admin Dashboard</Link>}
                <button
                  className="border-t pt-2 text-left"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href={"/sign-in"}>Login</Link>
                <Link href={"/sign-up"}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
