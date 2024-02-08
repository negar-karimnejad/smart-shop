import { formatCurrency } from "../../utilities/formatCurrency";
import Link from "next/link";
import { BsStar, BsStarFill } from "react-icons/bs";

function Product({ product }) {
  const { id, images, name, reviews, price } = product;

  const calculateAverageRating = () => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      return Math.floor(totalRating / reviews.length);
    }
    return 0; // Default to 0 if there are no reviews
  };

  const averageRating = calculateAverageRating();

  return (
    <>
      {product && (
        <Link
          href={`products/${id}`}
          className="bg-gray-50 flex flex-col items-center rounded-lg gap-1 p-3 text-center border shadow-sm transition-all hover:scale-105"
        >
          <div className="w-full mb-5">
            <img
              src={images[0].image}
              alt={name}
              className="rounded-md object-contain w-full h-36"
            />
          </div>
          <p className="text-gray-600 text-sm line-clamp-1">{name}</p>
          <div className="flex items-center text-yellow-500">
            {[...Array(averageRating)].map((_, index) => (
              <BsStarFill key={index} className="mr-1" />
            ))}
            {[...Array(5 - averageRating)].map((_, index) => (
              <BsStar key={index} className="mr-1" />
            ))}
          </div>
          <div className="text-gray-600">{reviews?.length} reviews</div>
          <div className="font-bold">{formatCurrency(price)}</div>
        </Link>
      )}
    </>
  );
}

export default Product;
