import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import Counter from "../../common/Counter/Counter";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const elementoEncontrado = products.find((elemento) => elemento.id === id);
    setProduct(elementoEncontrado);
  }, [id]);

  return (
    <div style={{ border: "2px solid grey" }}>
      <h2>{product.title}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "300px" }}
        />
      </div>

      <h3>{product.description}</h3>
      <h4>En stock : {product.stock}</h4>

      <Counter />
    </div>
  );
};

export default ItemDetail;
