import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/Counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);

    getDoc(refDoc).then((res) => {
      setProduct({ id: res.id, ...res.data() });
    });
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

      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
