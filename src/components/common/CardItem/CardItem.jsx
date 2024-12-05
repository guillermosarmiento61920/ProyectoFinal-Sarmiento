import "./cardItem.css";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  return (
    <div className="cards" key={item.id}>
      <Link to={`/detail/${item.id}`}>
        <h3>{item.title}</h3>
        <img src={item.imageUrl} alt={item.title} />
        <p>{item.description}</p>
        <h4>${item.price}</h4>
      </Link>
    </div>
  );
};

export default CardItem;
