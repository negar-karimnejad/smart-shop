"use client";

import { useState } from "react";

function Category({ category }) {
  const [isActive, setIsActive] = useState("All");

  return (
    <li
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
  );
}

export default Category;
