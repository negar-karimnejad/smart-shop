import { useContext, useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("shopping-cart");
    const cProducts = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);
  
  const handleAddToCart = (product) => {
    setCartProducts((cartProducts) => {
      if (cartProducts.find((item) => item.id === product.id) == null) {
        return [...cartProducts, { ...product, quantity: 1 }];
      } else {
        return cartProducts.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: Number(item.quantity) + 1 };
          } else {
            return item;
          }
        });
      }
    });
    localStorage.setItem("shopping-cart", JSON.stringify(cartProducts));
  };

  const removeFromCart = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const incrementCartQty = (id) => {
    setCartTotalQty(
      cartProducts?.find((product) => {
        if (product.id === id) {
          setCartProducts([
            ...cartProducts,
            { ...product, quantity: product.quantity + 1 },
          ]);
        } else {
          setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
        }
      })
    );
  };

  const decrementCartQty = (id) => {
    setCartProducts(
      cartProducts?.find((product) => product.id === id)?.quantity === 1
        ? cartProducts?.filter((product) => product.id !== id)
        : cartProducts?.find((product) => {
            if (product.id === id) {
              [...cartProducts, { ...product, quantity: product.quantity - 1 }];
            }
          })
    );
  };

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddToCart,
    removeFromCart,
    incrementCartQty,
    decrementCartQty,
    clearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used whitin a CartContextProvider");
  }
  return context;
};
