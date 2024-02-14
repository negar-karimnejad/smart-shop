"use client";

import { useSearchParams } from "next/dist/client/components/navigation";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Category from "./Category";
import { categories } from "../../utilities/data";

function Categories() {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div className="bg-white max-md:overflow-x-auto shadow pt-3 z-40 sticky left-0 top-[4.9rem]">
      <Container>
        <div className="flex items-end justify-between gap-8">
          {categories.map((item) => (
            <Category
              key={item.title}
              title={item.title}
              icon={item.icon}
              selected={
                category === item.title ||
                (category === null && item.title === "All")
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Categories;
