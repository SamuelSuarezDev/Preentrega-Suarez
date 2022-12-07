import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduct from "./Components/DetailProduct/DetailProduct";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar carNumber={7}></Navbar>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
