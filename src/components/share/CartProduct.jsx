import Link from "next/link";
import { useCart } from "../../../hooks/useCart";
import { formatCurrency } from "../../utilities/formatCurrency";

/* eslint-disable no-unused-vars */
function CartProduct({ product }) {
  const { removeFromCart, incrementCartQty, decrementCartQty } = useCart();

  return (
    <div className="flex py-3  items-center justify-between w-full border-b">
      <div className="gap-5 relative">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.selectedImage.image}
            className="w-20 h-20 hidden md:block object-contain"
            alt={product.name}
          />
        </Link>
        <div className="md:absolute w-48 top-0 left-24 bottom-0 m-auto">
          <Link href={`/products/${product.id}`}>
            {product.name?.slice(0, 18)}...
          </Link>
          <p>{product.selectedImage.color}</p>
          <button
            onClick={() => removeFromCart(product.id)}
            className="underline text-slate-500"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="">{formatCurrency(product.price)}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => decrementCartQty(product.id)}
          className="border rounded-md w-8 h-8 flex items-center justify-center"
        >
          -
        </button>
        <p>{product.quantity}</p>
        <button
          onClick={() => incrementCartQty(product.id)}
          className="border rounded-md w-8 h-8 flex items-center justify-center"
        >
          +
        </button>
      </div>
      <p className="font-bold ">
        {formatCurrency(product.price * product.quantity)}
      </p>
    </div>
  );
}

export default CartProduct;
