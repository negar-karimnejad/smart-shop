"use client";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";

function Category({ title, icon, selected }) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (title === "All") {
      router.push("/");
    } else {
      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: {
            category: title,
          },
        },
        { skipNull: true }
      );
      router.push(url);
    }
  }, [params, router, title]);

  return (
    <div
      onClick={handleClick}
      className={`${
        selected ? "opacity-100 border-b-2 border-gray-800" : "opacity-60"
      } flex items-center gap-1 text-sm hover:opacity-100 cursor-pointer py-2`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default Category;
