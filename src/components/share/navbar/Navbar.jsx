"use client";

import Link from "next/link";
import { useState } from "react";
import Categories from "../Categories";
import Container from "../../ui/Container";
import NavSearch from "./NavSearch";
import UserNav from "./UserNav";
import UserNavLinks from "./UserNavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-200 sticky top-0 right-0 z-50">
        <Container>
          <div className="py-5 flex justify-between items-center">
            <Link href="/" className="flex-1 text-2xl font-bold">
              <span className="bg-black text-white px-2 py-1">E</span>-Shop
            </Link>
            <NavSearch />
            <UserNav setIsOpen={setIsOpen} />
          </div>
        </Container>

        <Categories />
      </div>

      {isOpen && <UserNavLinks setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
