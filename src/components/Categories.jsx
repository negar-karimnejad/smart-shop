import { categories } from "@/data";
import Container from "./Container";

function Categories() {
  return (
    <div className="bg-white py-3 hidden md:block shadow-sm">
      <Container>
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
      </Container>
    </div>
  );
}

export default Categories;
