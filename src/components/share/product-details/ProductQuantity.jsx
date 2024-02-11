function ProductQuantity({ cartProduct, setCartProduct }) {
  const handleIncrementCartQty = () => {
    if (cartProduct?.quantity === 99) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: prev?.quantity + 1 };
    });
  };
  
  const handleDecrementCartQty = () => {
    if (cartProduct?.quantity === 1) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: prev?.quantity - 1 };
    });
  };

  return (
    <div className="flex items-center gap-3">
      <b className="uppercase text-gray-700 text-sm mr-3">Quantity: </b>
      <button
        onClick={() => {
          handleDecrementCartQty();
        }}
        className="border rounded-md w-8 h-8 flex items-center justify-center"
      >
        -
      </button>
      <p>{cartProduct?.quantity}</p>
      <button
        onClick={() => {
          handleIncrementCartQty();
        }}
        className="border rounded-md w-8 h-8 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

export default ProductQuantity;
