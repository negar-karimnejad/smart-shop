"use client";

import { CartContextProvider } from "../hooks/useCart";

function CartProvider({ children }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}

export default CartProvider;
