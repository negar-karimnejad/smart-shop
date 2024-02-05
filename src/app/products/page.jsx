import Link from "next/link";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
};

async function page() {
  const products = await getProducts();
  return (
    <>
      {products.map((product) => (
        <Link href={`/products/${product.id}`}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <hr />
        </Link>
      ))}
    </>
  );
}

export default page;
