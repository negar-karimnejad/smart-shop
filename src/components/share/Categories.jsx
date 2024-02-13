import { categories } from "../../data";
import Container from "../ui/Container";
import Category from "./Category";

function Categories() {
  return (
    <div className="bg-white max-md:overflow-x-auto shadow pt-3 z-40 sticky top-[4.9rem]">
      <Container>
        <ul className="flex items-end justify-between gap-8">
          {categories.map((category) => (
            <Category key={category.title} category={category} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Categories;
