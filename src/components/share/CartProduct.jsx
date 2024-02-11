/* eslint-disable no-unused-vars */
function CartProduct({ product }) {
  return (
    <div className="flex py-3  items-center justify-between w-full border-b">
      <div className="gap-5 relative">
        <img
          src={product.selectedImage.image}
          className="w-20 h-20 hidden md:block object-contain"
          alt={product.name}
        />
        <div className="md:absolute w-48 top-0 left-24 bottom-0 m-auto">
          <p>{product.name?.slice(0, 18)}...</p>
          <p>{product.selectedImage.color}</p>
          <button className="underline text-slate-500">Remove</button>
        </div>
      </div>
      <p className="">{product.price}</p>
      <div className="flex items-center justify-center gap-3">
        <button className="border rounded-md w-8 h-8 flex items-center justify-center">
          -
        </button>
        <p>{product.quantity}</p>
        <button className="border rounded-md w-8 h-8 flex items-center justify-center">
          +
        </button>
      </div>
      <p className="font-bold ">${product.price * product.quantity}</p>
    </div>
  );
}

export default CartProduct;
