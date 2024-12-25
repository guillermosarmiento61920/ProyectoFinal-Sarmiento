import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const { cart, montoTotal, resetCart } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState(null);

  const envioDeFormulario = (evento) => {
    let total = montoTotal();
    evento.preventDefault();
    let orden = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orden).then((res) => {
      setOrdenId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");
    orden.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.cantidad });
    });
  };

  const capturaDatos = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {ordenId ? (
        <h2>tu orden fue generada con el id {ordenId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="nombre..."
            name="nombre"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="telefono..."
            name="telefono"
            onChange={capturaDatos}
          />
          <button>comprar</button>
          <button type="button">cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
