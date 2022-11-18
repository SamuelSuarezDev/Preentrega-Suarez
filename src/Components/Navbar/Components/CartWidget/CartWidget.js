import React from "react";
import "./cartWidget.css";

const CartWidget = ({ elements }) => {
 
  return (
    <div id="container" className="container-widget">
      <div className="container-button"> </div>
      <p className="number">{elements}</p>
      <img
        className="car"
        width={"30px"}
        src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
        alt=""
      />
    </div>
  );
};

export default CartWidget;
