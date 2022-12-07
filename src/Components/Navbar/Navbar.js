import { useState } from "react";
import MenuItem from "./Components/MenuItem/MenuItem";
import { arrayProducts } from "../ItemListContainer/ItemListContainer";
import "./navbar.css";

export const arrayItems = [
  { mode: "title", text: "S.soccer" },
  { mode: "section", text: "Todo" },
  { id: "1", mode: "section", text: "Uniformes" },
  { id: "2", mode: "section", text: "Guayos" },
  { id: "3", mode: "section", text: "Balones" },
  { id: "car", mode: "car", carNumber: "4", text: "crro" },
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
          {arrayItems.map(({ mode, id, text, carNumber }) => (
            <MenuItem
              mode={mode}
              text={text}
              key={text}
              carNumber={carNumber}
              to={"/category/" + id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
