import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="./cart" style={{ color: "black" }}>
        <MdShoppingCart size="30px" />
        <span>6</span>
      </Link>
    </div>
  );
};

export default CartWidget;
