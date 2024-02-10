
function ProductQuantity() {
  return (
    <div className="flex items-center gap-3">
      <b className="uppercase text-gray-700 text-sm mr-3">Quantity: </b>
      <button className="border rounded-md w-8 h-8 flex items-center justify-center">
        -
      </button>
      <p>1</p>
      <button className="border rounded-md w-8 h-8 flex items-center justify-center">
        +
      </button>
    </div>
  );
}

export default ProductQuantity;
