"use client";

import { Redressed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Container from "../../ui/Container";
import NavSearch from "./NavSearch";
import UserNav from "./UserNav";
import UserNavLinks from "./UserNavLinks";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-200 sticky top-0 right-0 z-50">
        <Container>
          <div className="py-5 flex justify-between items-center">
            <Link
              href="/"
              className={`${redressed.className} flex-1 text-2xl font-bold`}
            >
              E-Shop
            </Link>
            <NavSearch />
            <UserNav setIsOpen={setIsOpen} />
          </div>
        </Container>
      </div>

      {isOpen && <UserNavLinks setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
