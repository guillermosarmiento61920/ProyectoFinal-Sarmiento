import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ display: "flex", border: "2px solid black" }}>
      <button onClick={restar}>restar</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>sumar</button>
      <button>agregar al carrito</button>
    </div>
  );
};

export default Counter;
