import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCart = (product) => {
    setCart([...cart, product]);
  };
  const borrarItemCart = (id) => {
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };
  const resetCart = () => {
    setCart([]);
  };

  const montoTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);

    return total;
  };

  const itemsTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);

    return total;
  };

  let data = {
    cart,
    agregarCart,
    borrarItemCart,
    resetCart,
    montoTotal,
    itemsTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
