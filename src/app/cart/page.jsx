import CartProduct from "../../components/share/CartProduct";
import Container from "../../components/ui/Container";
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
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {/* Cart Products */}
        <CartProduct />

        <div className="flex max-sm:flex-col max-sm:gap-10 justify-between items-start w-full py-4 mt-5">
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
            <Link
              href={"/login"}
              className="border-2 font-semibold border-gray-600 rounded-md p-2 mb-2 transition-all hover:text-slate-500"
            >
              Login To Checkout
            </Link>
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
