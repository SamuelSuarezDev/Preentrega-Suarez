import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import { Brief } from "./Components/Checkout/Brief/Brief";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/car" element={<CartWidget />} />
            <Route exact path="/carBuy" element={<Brief />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
