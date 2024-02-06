"use client";

import Link from "next/link";
import { BsStar, BsStarFill } from "react-icons/bs";

function Product({ product }) {
  const calculateAverageRating = () => {
    if (product.reviews && product.reviews.length > 0) {
      const totalRating = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      return Math.floor(totalRating / product.reviews.length);
    }
    return 0; // Default to 0 if there are no reviews
  };

  const averageRating = calculateAverageRating();

  return (
    <>
      {product && (
        <Link
          href={`products/${product.id}`}
          className="bg-gray-50 flex flex-col justify-center items-center gap-1 p-2 min-w-56 text-center border shadow transition-all hover:scale-105"
        >
          <div className="w-full mb-5">
            <img
              src={product.images[0].image}
              alt={product.name}
              className="rounded-md object-contain w-full h-36"
            />
          </div>
          <p className="text-gray-600 text-sm line-clamp-1">{product.name}</p>
          <div className="flex items-center text-yellow-500">
            {[...Array(averageRating)].map((_, index) => (
              <BsStarFill key={index} className="mr-1" />
            ))}
            {[...Array(5 - averageRating)].map((_, index) => (
              <BsStar key={index} className="mr-1" />
            ))}
          </div>
          <div className="text-gray-600">{product.reviews?.length} reviews</div>
          <div className="font-bold">${product.price}</div>
        </Link>
      )}
    </>
  );
}

export default Product;
