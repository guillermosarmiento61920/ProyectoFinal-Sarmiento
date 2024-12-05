import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../products";
import CardItem from "../../common/CardItem/CardItem";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [elements, setElement] = useState([]);

  useEffect(() => {
    const filtradoProducto = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        resolve(name ? filtradoProducto : products);
      } else {
        reject("ocurrio un error");
      }
    });

    getProducts
      .then((res) => {
        setElement(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

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
