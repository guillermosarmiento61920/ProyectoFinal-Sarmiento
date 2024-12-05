import "./App.css";
import NavBar from "../src/components/layout/NavBar/NavBar";
import { ItemListContainer } from "../src/components/pages/ItemListContainer/ItemListContainer";
import ItemDetail from "../src/components/pages/ItemDetail/ItemDetail";
import Cart from "./components/pages/Cart/Cart";
import Footer from "./components/layout/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
