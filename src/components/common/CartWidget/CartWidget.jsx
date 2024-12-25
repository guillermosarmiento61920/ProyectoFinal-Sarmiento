import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart, itemsTotal } = useContext(CartContext);
  const total = itemsTotal();

  return (
    <div>
      <Link to="./cart" style={{ color: "black" }}>
        <MdShoppingCart size="30px" />
        <span>{total}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
