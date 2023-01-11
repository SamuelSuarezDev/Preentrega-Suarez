import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import ProductContextProvider from "./Context/ProductContext";
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
          <ProductContextProvider>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:id"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/car" element={<CartWidget />} />
              <Route exact path="/carBuy/:id" element={<Brief />} />
            </Routes>
          </ProductContextProvider>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
