import { useState } from "react";
import MenuItem from "./Components/MenuItem/MenuItem";
import { arrayProducts } from "../ItemListContainer/ItemListContainer";
import "./navbar.css";

export let state = "";
export const arrayItems = [
  { mode: "title", text: "S.soccer", to: "/", id: "0" },
  { mode: "section", text: "Todo", id: "0", to: "/" },
  { id: "1", mode: "section", text: "Uniformes", to: "/category/1" },
  { id: "2", mode: "section", text: "Guayos", to: "/category/2" },
  { id: "3", mode: "section", text: "Balones", to: "/category/3" },
  { id: "car", mode: "car", carNumber: "4", to: "/car" },
];
export const Navbar = ({ carNumber }) => {
  let content = document.getElementById("content");
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);

    if (showMenu) {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  };
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2354/2354551.png"
          alt=""
          className="more"
          onClick={handleMenu}
        />
      </div>
      <div id="content" className="content">
        <div className="menu-items">
          {arrayItems.map(({ mode, id, text, carNumber, to }) => (
            <div
              onClick={() => {
                state = id;
                console.log(state);
              }}
              key={id}
            >
              <MenuItem mode={mode} text={text} carNumber={carNumber} to={to} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
