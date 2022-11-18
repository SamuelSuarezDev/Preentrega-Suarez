import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <header>
        <div>
          <Navbar></Navbar>
        </div>
      </header>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
