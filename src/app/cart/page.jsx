import React from "react";

// id: "64a654593e91b8e73a351e9b",
// name: "iphone 14",
// description: "Short description",
// price: 2999,
// brand: "apple",
// category: "Phone",
// inStock: true,
// images: [
//   {
//     color: "White",
//     colorCode: "#FFFFFF",
//     image: "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
//   },
//   {
//     color: "Gray",
//     colorCode: "#808080",
//     image: "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg",
//   },
// ],
// reviews: [],

function page() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center font-medium">Shopping Cart</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="uppercase">
            <th className="border border-gray-400 px-4 py-2">product</th>
            <th className="border border-gray-400 px-4 py-2">price</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-400">
            <td className="border border-gray-400 px-4 py-2">product 1</td>
            <td className="border border-gray-400 px-4 py-2">$20.00</td>
            <td className="border border-gray-400 px-4 py-2">5</td>
            <td className="border border-gray-400 px-4 py-2">$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default page;
