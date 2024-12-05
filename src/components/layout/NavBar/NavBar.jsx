import CartWidget from "../../common/CartWidget/CartWidget";
import "./navBar.css";
import logo from "../../../assets/favicon.ico";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex">
        <h3>Bienvenidos</h3>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <CartWidget />
      </div>

      <div className="navegacion">
        <ul>
          <Link to="/">Todas</Link>
          <Link to="/category/combo">Combos</Link>
          <Link to="/category/sinalcohol">Sin alcohol</Link>
          <Link to="/category/conalcohol">Con alcohol</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
