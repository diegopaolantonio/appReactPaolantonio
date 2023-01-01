import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (itemToAdd) => {
    if (!isInCart(itemToAdd.id)) {
      setCart([...cart, itemToAdd]);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeFromCart = (id) => {
    const updateCart = cart.filter((product) => product.id !== id);
    setCart(updateCart);
  };

  const getCantidad = () => {
    let cantidadTotal = 0;

    cart.forEach((item) => {
      cantidadTotal += item.cantidad;
    });

    return cantidadTotal;
  };

  const getPrecioTotal = () => {
    let precioTotal = 0;

    cart.forEach((item) => {
      precioTotal += item.price * item.cantidad;
    });

    return precioTotal;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        getCantidad,
        getPrecioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
