import Container from "@/components/Container";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

function Cart() {
  return (
    <Container>
      <div className="mt-10">
        <h1 className="text-2xl text-center font-medium mb-10">
          Shopping Cart
        </h1>
        <div className="flex gap-4 pb-2 font-medium items-center justify-between w-full uppercase border-b">
          <p className="">Product</p>
          <p className="">Price</p>
          <p className="">Quantity</p>
          <p className="">Total</p>
        </div>
        <div className="flex py-3  items-center justify-between w-full border-b">
          <div className="gap-5 relative">
            <img
              src="https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg"
              className="w-20 h-20 hidden md:block"
              alt=""
            />
            <div className="md:absolute top-0 left-24 bottom-0 m-auto">
              <p>Iphone14</p>
              <p>White</p>
              <button className="underline text-slate-500">Remove</button>
            </div>
          </div>
          <p className="">$2999.00</p>
          <p className="flex items-center justify-center gap-3">
            <button className="border rounded-md w-8 h-8 flex items-center justify-center">
              -
            </button>
            <p>1</p>
            <button className="border rounded-md w-8 h-8 flex items-center justify-center">
              +
            </button>
          </p>
          <p className="font-bold ">$100.00</p>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-10 max-sm:items-center max-sm:text-center justify-between items-start w-full py-4">
          <button className="border border-gray-500 rounded-md px-2 py-1 transition-all hover:text-slate-500">
            Clear Cart
          </button>
          <div className="flex flex-col">
            <div className="font-bold flex justify-between items-center mb-2">
              <p>Subtotal</p>
              <p>$2999</p>
            </div>
            <p className="text-slate-500 text-sm mb-1">
              Taxes and shipping calculated at checkout
            </p>
            <button className="border-2 font-semibold border-gray-600 rounded-md p-2 mb-2 transition-all hover:text-slate-500">
              Login To Checkout
            </button>
            <Link
              href={"/"}
              className="text-slate-500 text-sm flex items-center gap-1"
            >
              <BsArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
