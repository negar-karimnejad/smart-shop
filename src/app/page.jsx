"use client";

import { useSearchParams } from "next/dist/client/components/navigation";
import queryString from "query-string";
import Categories from "../components/share/Categories";
import Hero from "../components/share/Hero";
import Product from "../components/share/Product";
import Container from "../components/ui/Container";
import { products } from "../utilities/data";

export default function Home() {
  const params = useSearchParams();

  const currentQuery = params ? queryString.parse(params.toString()) : {};
  let filteredProducts = [];

  if (currentQuery.category) {
    filteredProducts = currentQuery.category
      ? products.filter((product) => product.category === currentQuery.category)
      : products;
  } else {
    filteredProducts = currentQuery.searchTerm
      ? products.filter((product) =>
          product.name
            .toLocaleLowerCase()
            .includes(currentQuery.searchTerm.toLocaleLowerCase())
        )
      : products;
  }
  console.log(currentQuery);

  return (
    <>
      <Categories />
      <Hero />
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5 w-full">
          {filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>

        {!filteredProducts.length && (
          <p className="text-center pt-10 w-full text-2xl whitespace-nowrap m-auto">
            Oops! No products found. Click &apos;All&apos; to clear filters.
          </p>
        )}
      </Container>
    </>
  );
}
