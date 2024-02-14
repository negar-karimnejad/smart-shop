"use client";
import { useCallback, useState } from "react";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";

function NavSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSearch("");
      if (!search) return router.push("/");
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatesQuery = {
        ...currentQuery,
        searchTerm: search,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatesQuery,
        },
        { skipNull: true }
      );
      router.push(url);
    },
    [params, router, search]
  );

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
