"use client";

import { formatCurrency } from "../../../utilities/formatCurrency";
import { useState } from "react";
import Button from "../../ui/Button";
import ProductColor from "./ProductColor";
import ProductQuantity from "./ProductQuantity";
import ProductRating from "./ProductRating";
import SeparatorLine from "./SeparatorLine";

function ProductDetails({ product, chosenColor, setChosenColor }) {
  const {
    id: productId,
    name,
    price,
    reviews,
    description,
    category,
    brand,
    inStock,
  } = product;
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    try {
      setLoading(true);
      await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      setLoading(false);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg font-bold mt-1">{formatCurrency(price)}</p>
      <div className="flex gap-1">
        <ProductRating reviews={reviews} />
        <p className="text-gray-500">{reviews?.length} reviews</p>
      </div>
      <SeparatorLine />
      <p className="mt-2 text-[11px] text-gray-600 text-justify">
        {description}
      </p>
      <SeparatorLine />
      <p>
        <b className="uppercase text-gray-700 text-sm">Category: </b>
        <span className="text-gray-600">{category}</span>
      </p>
      <p>
        <b className="uppercase text-gray-700 text-sm">Brand: </b>
        <span className="text-gray-600">{brand}</span>
      </p>
      <span className="text-sm text-blue-400">
        {inStock ? "In stock" : "Out of stock"}
      </span>
      <SeparatorLine />
      <ProductColor
        product={product}
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
      />
      <SeparatorLine />
      <ProductQuantity />
      <SeparatorLine />
      <div className="max-w-xs">
        <Button onClick={addToCart} disabled={loading}>
          {loading ? "Adding To Cart..." : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
