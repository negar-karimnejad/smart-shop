import Image from "next/image";
import { BsStar, BsStarFill } from "react-icons/bs";

function ProductReviews({ review }) {
  const { user, rating, comment } = review;
  const { image, name, createdAt } = user;

  return (
    <>
      <div className="flex items-center gap-2">
        <Image
          src={image}
          width={25}
          height={25}
          alt={name}
          className="rounded-full"
        />
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm text-gray-500">
          {new Date(createdAt).getDate() - new Date().getDate()} days ago
        </p>
      </div>
      <div className="flex items-center text-yellow-500 my-2">
        {[...Array(rating)].map((_, index) => (
          <BsStarFill key={index} className="mr-1" />
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <BsStar key={index} className="mr-1" />
        ))}
      </div>
      <p className="text-sm text-gray-500 max-w-56">{comment}</p>
      <div className="border-b-2 w-56 my-3"></div>
    </>
  );
}

export default ProductReviews;
