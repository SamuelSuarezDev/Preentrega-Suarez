import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contador from "./Components/Contador/contador";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <ItemListContainer texto={"hola a todos"} />
      <Contador />
    </>
  );
}

export default App;
