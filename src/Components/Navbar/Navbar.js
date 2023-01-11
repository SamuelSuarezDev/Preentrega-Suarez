import { useState } from "react";
import MenuItem from "./Components/MenuItem/MenuItem";
import "./navbar.css";
import { useCartContext } from "../../Context/CartContext";
export let state = "";
export const Navbar = () => {
  const { cartList } = useCartContext();
  // eslint-disable-next-line no-restricted-globals
  const [width, setwidth] = useState(screen.width);
  const arrayItems = [
    { mode: "title", text: "S.soccer", to: "/", id: "logo" },
    { mode: "section", text: "Todo", id: "0", to: "/" },
    { id: "1", mode: "section", text: "Uniformes", to: "/category/1" },
    { id: "2", mode: "section", text: "Guayos", to: "/category/2" },
    { id: "3", mode: "section", text: "Balones", to: "/category/3" },
    { id: "car", mode: "car", carNumber: cartList.length, to: "/car" },
  ];
  let isWidth = true;
  if (width > 768) {
    isWidth = true;
  } else {
    isWidth = false;
  }
  const [showMenu, setShowMenu] = useState(isWidth);

  const handleMenu = () => {
    setShowMenu(!showMenu);
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
      {showMenu && (
        <div id="content" className="content">
          <div className="menu-items">
            {arrayItems.map(({ mode, id, text, carNumber, to }) => (
              <div
                onClick={() => {
                  state = id;
                  if (width < 768) {
                    handleMenu();
                  }
                }}
                key={id}
              >
                <MenuItem
                  mode={mode}
                  text={text}
                  carNumber={carNumber}
                  to={to}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
