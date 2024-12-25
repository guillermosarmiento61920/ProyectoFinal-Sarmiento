import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, resetCart, borrarItemCart, montoTotal } =
    useContext(CartContext);

  let total = montoTotal();
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id} style={{ border: "1px solid black" }}>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <h4>{item.cantidad}</h4>
            <button onClick={() => borrarItemCart(item.id)}>eliminar</button>
          </div>
        );
      })}
      <div>
        <h4>el total a pagar es {total}</h4>
        <button onClick={resetCart}>limpiar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
