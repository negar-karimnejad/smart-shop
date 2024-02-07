"use client";

import { categories } from "@/data";
import { useState } from "react";
import Container from "./Container";

function Categories() {
  const [isActive, setIsActive] = useState("All");

  return (
    <div className="bg-white max-md:overflow-x-auto shadow-sm pt-3">
      <Container>
        <ul className="flex items-end justify-between gap-8">
          {categories.map((category) => (
            <li
              key={category.title}
              onClick={() => setIsActive(category.title)}
              className={`${
                isActive === category.title
                  ? "opacity-100 border-b-2 border-gray-800"
                  : "opacity-60"
              } flex items-center gap-1 hover:opacity-100 cursor-pointer py-2`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Categories;
