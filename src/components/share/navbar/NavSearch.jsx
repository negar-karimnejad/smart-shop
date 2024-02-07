function NavSearch() {
  return (
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
  );
}

export default NavSearch;
