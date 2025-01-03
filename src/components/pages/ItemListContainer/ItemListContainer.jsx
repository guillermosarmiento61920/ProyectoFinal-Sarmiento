import { useState } from "react";
import { useEffect } from "react";
import CardItem from "../../common/CardItem/CardItem";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [elements, setElement] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let refer = productsCollection;
    if (name) {
      let porcionCollection = query(
        productsCollection,
        where("category", "==", name)
      );
      refer = porcionCollection;
    }

    getDocs(refer).then((res) => {
      let nuevoArray = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setElement(nuevoArray);
    });
  }, [name]);

  if (elements.length === 0) {
    return (
      <div className="skeleton-container">
        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={210}
            height={118}
            style={{ margin: "10px" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2>Productos disponibles:</h2>
      <div className="contenedor">
        {elements.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
