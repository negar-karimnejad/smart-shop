
function ProductColor({ product, chosenColor, setChosenColor }) {
  return (
    <p className="flex items-center gap-2">
      <b className="uppercase text-gray-700 text-sm mr-3">Color:</b>
      {product?.images.map((image) => (
        <div
          key={image.colorCode}
          className={`${
            chosenColor === image.color && "border-2 border-sky-500"
          } w-8 h-8 p-1 flex items-center justify-center rounded-full`}
        >
          <div
            onClick={() => setChosenColor(image.color)}
            style={{ backgroundColor: image.color }}
            className="w-5 h-5 rounded-full cursor-pointer"
          ></div>
        </div>
      ))}
    </p>
  );
}

export default ProductColor;
