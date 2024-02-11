"use client";

import Image from "next/image";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";

function SingleProduct({ product }) {
  const [cartProduct, setCartProduct] = useState({
    id: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    description: product.description,
    quantity: 1,
    price: product.price,
    selectedImage: product.images[0],
  });

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse max-md:flex-row max-md:gap-20 lg:gap-20 gap-0 justify-center items-center">
        <div className="flex lg:flex-col max-md:flex-col justify-center items-center gap-3 border p-5">
          {product.images.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setCartProduct((prev) => {
                  return { ...prev, selectedImage: item };
                })
              }
              className={`${
                cartProduct?.selectedImage?.color === item.color &&
                "border-2 border-sky-500"
              } cursor-pointer p-2`}
            >
              <Image src={item.image} alt={item.color} width={60} height={60} />
            </div>
          ))}
        </div>
        <div>
          {product.images.map((item, index) => {
            if (item.color === cartProduct?.selectedImage?.color) {
              return (
                <Image
                  key={index}
                  src={item.image}
                  alt={product.name}
                  width={300}
                  height={300}
                />
              );
            }
          })}
        </div>
      </div>

      <ProductDetails
        product={product}
        cartProduct={cartProduct}
        setCartProduct={setCartProduct}
      />

      <div className="flex flex-col">
        <h1 className="font-bold text-xl mb-5">Product Reviews</h1>
        {product.reviews.map((review) => (
          <ProductReviews key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}

export default SingleProduct;
