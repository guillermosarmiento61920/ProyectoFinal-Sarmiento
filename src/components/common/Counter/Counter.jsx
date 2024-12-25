import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const { agregarCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      alert("No hay más stock disponible");
    }
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const onAdd = () => {
    let objetoParaAgregar = { ...product, cantidad: contador };
    agregarCart(objetoParaAgregar);
  };

  return (
    <div style={{ display: "flex", border: "2px solid black" }}>
      <button onClick={restar}>restar</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>sumar</button>
      <button onClick={onAdd}>agregar al carrito</button>
    </div>
  );
};

export default Counter;
