import { useState } from "react";
import MenuItem from "./Components/MenuItem/MenuItem";
import "./navbar.css";

export const Navbar = () => {
  let content = document.getElementById("content");
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);

    if (showMenu == true) {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  };
  return (
    <div className="container">
      <div className="header">
        <MenuItem className="logo" mode="title" text="S.soccer"></MenuItem>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2354/2354551.png"
          alt=""
          className="more"
          onClick={handleMenu}
        />
      </div>
      <div id="content" className="content">
        <div className="menu-items">
          <MenuItem mode="section" text="Todo"></MenuItem>
          <MenuItem mode="section" text="Uniformes"></MenuItem>
          <MenuItem mode="section" text="Balones"></MenuItem>
          <MenuItem mode="section" text="Guayos"></MenuItem>
          <MenuItem mode="car" text="S.soccer"></MenuItem>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
