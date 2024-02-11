"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { useCart } from "../../../../hooks/useCart";
import { formatCurrency } from "../../../utilities/formatCurrency";
import Button from "../../ui/Button";
import SeparatorLine from "../../ui/SeparatorLine";
import ProductColor from "./ProductColor";
import ProductQuantity from "./ProductQuantity";
import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";

function ProductDetails({ product }) {
  const router = useRouter();
  const [isProductInCart, setIsProductInCart] = useState(false);
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

  const { handleAddToCart, cartProducts } = useCart();

  useEffect(() => {
    setIsProductInCart(false);
    const existInCart = cartProducts?.findIndex(
      (item) => item.id === product.id
    );
    if (existInCart > -1) {
      setIsProductInCart(true);
    }
  }, [cartProducts]);

  const addToCart = async () => {
    try {
      handleAddToCart(cartProduct);
    } catch (error) {
      console.error("Error adding product to cart:", error);
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
        {!isProductInCart ? (
          <>
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
              <Button onClick={addToCart}>Add To Cart</Button>
            </div>
          </>
        ) : (
          <div className="mt-5 w-full">
            <p className="my-3 text-slate-500 flex items-center gap-1">
              <MdCheck
                className="text-white font-bold bg-teal-400 rounded-full"
                size={18}
              />
              <span className="text-[14px]">Product added to cart</span>
            </p>
            <button
              onClick={() => {
                router.push("/cart");
              }}
              className="bg-transparent border-2 border-slate-500 w-full rounded-md font-semibold cursor-pointer px-2 py-3 transition-all hover:text-slate-500"
            >
              View Cart
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="font-bold text-xl mb-5">Product Reviews</h1>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <ProductReviews key={review.id} review={review} />
          ))
        ) : (
          <div className="border-b w-fit text-slate-500 flex gap-1">
            There is no review for
            <span className="font-bold text-slate-600">
              {product.name?.slice(0, 21)}
            </span>
            😕
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
