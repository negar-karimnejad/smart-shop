function CartProduct() {
  return (
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
  );
}

export default CartProduct;
