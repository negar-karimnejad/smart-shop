"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { formatCurrency } from "../../../utilities/formatCurrency";
import Button from "../../ui/Button";
import ProductColor from "./ProductColor";
import ProductQuantity from "./ProductQuantity";
import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";
import SeparatorLine from "../../ui/SeparatorLine";

function ProductDetails({ product }) {
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

  const { handleAddToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    try {
      setLoading(true);
      handleAddToCart(cartProduct);
      setLoading(false);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setLoading(false);
    }
  };
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

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg font-bold mt-1">
          {formatCurrency(product.price)}
        </p>
        <div className="flex gap-1">
          <ProductRating reviews={product.reviews} />
          <p className="text-gray-500">{product.reviews?.length} reviews</p>
        </div>
        <SeparatorLine />
        <p className="mt-2 text-[11px] text-gray-600 text-justify">
          {product.description}
        </p>
        <SeparatorLine />
        <p>
          <b className="uppercase text-gray-700 text-sm">Category: </b>
          <span className="text-gray-600">{product.category}</span>
        </p>
        <p>
          <b className="uppercase text-gray-700 text-sm">Brand: </b>
          <span className="text-gray-600">{product.brand}</span>
        </p>
        <span className="text-sm text-blue-400">
          {product.inStock ? "In stock" : "Out of stock"}
        </span>
        <SeparatorLine />
        <ProductColor
          product={product}
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
        />
        <SeparatorLine />
        <ProductQuantity
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
        />
        <SeparatorLine />
        <div className="max-w-xs">
          <Button onClick={addToCart} disabled={loading}>
            {loading ? "Adding To Cart..." : "Add To Cart"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-xl mb-5">Product Reviews</h1>
        {product.reviews.map((review) => (
          <ProductReviews key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
