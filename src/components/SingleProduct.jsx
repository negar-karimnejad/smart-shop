"use client";

import { formatCurrency } from "@/utilities/formatCurrency";
import Image from "next/image";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

function SingleProduct({ product }) {
  const [chosenColor, setChosenColor] = useState(product?.images[0].color);

  const calculateAverageRating = () => {
    if (product?.reviews && product?.reviews?.length > 0) {
      const totalRating = product?.reviews.reduce(
        (sum, review) => sum + review?.rating,
        0
      );
      return Math.floor(totalRating / product?.reviews?.length);
    }
    return 0; // Default to 0 if there are no reviews
  };

  const averageRating = calculateAverageRating();

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse max-md:flex-row max-md:gap-20 lg:gap-20 gap-0 justify-center items-center">
        <div className="flex lg:flex-col max-md:flex-col justify-center items-center gap-3 border p-5">
          {product?.images.map((item, index) => (
            <div
              key={index}
              onClick={() => setChosenColor(item.color)}
              className={`${
                chosenColor === item.color && "border-2 border-sky-500"
              } cursor-pointer p-2`}
            >
              <Image src={item.image} alt={item.color} width={60} height={60} />
            </div>
          ))}
        </div>
        <div>
          {product?.images.map((item, index) => {
            if (item.color === chosenColor) {
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
        <h1 className="text-2xl font-bold">{product?.name}</h1>
        <p className="text-lg font-bold mt-1">
          {formatCurrency(product?.price)}
        </p>
        <div className="flex gap-1">
          <div className="flex items-center text-yellow-500">
            {[...Array(averageRating)].map((_, index) => (
              <BsStarFill key={index} className="mr-1" />
            ))}
            {[...Array(5 - averageRating)].map((_, index) => (
              <BsStar key={index} className="mr-1" />
            ))}
          </div>
          <p className="text-gray-500">{product?.reviews?.length} reviews</p>
        </div>
        <div className="border-b-2 w-48 my-3"></div>
        <p className="mt-2 text-[11px] text-gray-600 text-justify">
          {product?.description}
        </p>
        <div className="border-b-2 w-48 my-3"></div>
        <p>
          <b className="uppercase text-gray-700 text-sm">Category: </b>
          <span className="text-gray-600">{product?.category}</span>
        </p>
        <p>
          <b className="uppercase text-gray-700 text-sm">Brand: </b>
          <span className="text-gray-600">{product?.brand}</span>
        </p>
        {product?.inStock && (
          <span className="text-sm text-blue-400">inStock</span>
        )}
        <div className="border-b-2 w-48 my-3"></div>
        <p className="flex items-center gap-2">
          <b className="uppercase text-gray-700 text-sm mr-3">Color:</b>
          {product?.images.map((image) => (
            <div
              key={image.colorCode}
              className={`${
                chosenColor === image.color && "border-2 border-sky-500"
              } w-8 h-8 p-1 flex items-center justify-center rounded-full`}
            >
              <div
                onClick={() => setChosenColor(image.color)}
                style={{ backgroundColor: image.color }}
                className="w-5 h-5 rounded-full cursor-pointer"
              ></div>
            </div>
          ))}
        </p>
        <div className="border-b-2 w-48 my-3"></div>
        <p className="flex items-center gap-3">
          <b className="uppercase text-gray-700 text-sm mr-3">Quantity: </b>
          <button className="border rounded-md w-8 h-8 flex items-center justify-center">
            -
          </button>
          <p>1</p>
          <button className="border rounded-md w-8 h-8 flex items-center justify-center">
            +
          </button>
        </p>
        <div className="border-b-2 w-48 my-3"></div>
        <div className="max-w-xs">
          <button className="w-full rounded-md bg-slate-700 text-white p-2 transition-all hover:bg-slate-600">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl mb-5">Product Reviews</h1>
        {product.reviews.map((review) => (
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={review.user.image}
                width={25}
                height={25}
                alt={review.user.name}
                className="rounded-full"
              />
              <p className="font-semibold text-sm">{review.user.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(review.user.createdAt).getDate() -
                  new Date().getDate()}{" "}
                days ago
              </p>
            </div>
            <div className="flex items-center text-yellow-500 my-2">
              {[...Array(review.rating)].map((_, index) => (
                <BsStarFill key={index} className="mr-1" />
              ))}
              {[...Array(5 - review.rating)].map((_, index) => (
                <BsStar key={index} className="mr-1" />
              ))}
            </div>
            <p className="text-sm text-gray-500 max-w-56">{review.comment}</p>
            <div className="border-b-2 w-56 my-3"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SingleProduct;
