import { categories } from "@/data";

function Categories() {
  return (
    <div className="bg-white hidden md:block shadow-sm">
      <div className="main-container py-3">
        <ul className="flex items-center justify-between">
          {categories.map((category) => (
            <li
              key={category.title}
              className="flex items-center gap-1 transition-all opacity-60 hover:opacity-100 cursor-pointer"
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;