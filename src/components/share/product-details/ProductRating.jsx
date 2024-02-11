import { BsStar, BsStarFill } from "react-icons/bs";

function ProductRating({ reviews }) {
  const calculateAverageRating = () => {
    if (reviews && reviews?.length > 0) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review?.rating,
        0
      );
      return Math.floor(totalRating / reviews?.length);
    }
    return 0; // Default to 0 if there are no reviews
  };

  const averageRating = calculateAverageRating();
  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(averageRating)].map((_, index) => (
        <BsStarFill key={index} className="mr-1" />
      ))}
      {[...Array(5 - averageRating)].map((_, index) => (
        <BsStar key={index} className="mr-1" />
      ))}
    </div>
  );
}

export default ProductRating;
