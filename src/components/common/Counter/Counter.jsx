import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Alert from "@mui/material/Alert";

const Counter = ({ product }) => {
  const { agregarCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      alert("No hay más stock disponible");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No se puede disminuir más productos");
    }
  };

  const onAdd = () => {
    let objetoParaAgregar = { ...product, cantidad: contador };
    agregarCart(objetoParaAgregar);
  };

  return (
    <div>
      <div style={{ display: "flex", border: "2px solid black" }}>
        <button onClick={restar}>restar</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>sumar</button>
        <button
          onClick={() => {
            onAdd();
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
          }}
        >
          agregar al carrito
        </button>
      </div>
      {showAlert && (
        <Alert severity="success" style={{ marginTop: "10px" }}>
          Producto agregado correctamente
        </Alert>
      )}
    </div>
  );
};

export default Counter;
