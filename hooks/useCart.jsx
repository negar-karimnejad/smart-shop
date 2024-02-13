/* eslint-disable no-unsafe-optional-chaining */
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const { createContext } = require("react");

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const savedCart =
    typeof window !== "undefined"
      ? window.localStorage.getItem("shopping-cart")
      : false;
  const initialCartProducts = savedCart ? JSON.parse(savedCart) : [];
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddToCart = (product) => {
    setCartProducts((cartProducts) => {
      if (cartProducts?.find((item) => item.id === product.id) == null) {
        return [...cartProducts, product];
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
    toast.success("Product added to cart");
  };

  const removeFromCart = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
    toast.success("Product removed");
  };

  const clearCart = () => {
    setCartProducts([]);
    setCartTotalQty(0);
    toast.success("Cart cleared");
  };

  const incrementCartQty = (id) => {
    setCartProducts((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrementCartQty = (id) => {
    setCartProducts((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const value = {
    cartProducts,
    cartTotalQty,
    cartTotalAmount,
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
