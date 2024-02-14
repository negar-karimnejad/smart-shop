"use client";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback, useState } from "react";

function NavSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSearch("");

    if (!search) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: search,
        },
      },
      { skipNull: true }
    );
    router.push(url);
  });

  return (
    // hidden md:flex
    <form
      onSubmit={handleSubmit}
      className="flex-1 rounded-md overflow-hidden flex max-w-full"
    >
      <input
        className="w-full bg-white p-2 outline-none text-gray-600"
        type="text"
        placeholder="Explore E-Shop"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-slate-700 text-white px-2 py-1 transition-all hover:bg-slate-600"
      >
        Search
      </button>
    </form>
  );
}

export default NavSearch;
