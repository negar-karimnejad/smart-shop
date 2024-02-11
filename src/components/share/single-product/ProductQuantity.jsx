import { useCart } from "../../../../hooks/useCart";

function ProductQuantity({ cartProduct }) {
  const { incrementCartQty, decrementCartQty } = useCart();

  return (
    <div className="flex items-center gap-3">
      <b className="uppercase text-gray-700 text-sm mr-3">Quantity: </b>
      <button
        onClick={() => {
          incrementCartQty(cartProduct.id);
        }}
        className="border rounded-md w-8 h-8 flex items-center justify-center"
      >
        -
      </button>
      <p>{cartProduct.quantity}</p>
      <button
        onClick={() => {
          decrementCartQty(cartProduct.id);
        }}
        className="border rounded-md w-8 h-8 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

export default ProductQuantity;
