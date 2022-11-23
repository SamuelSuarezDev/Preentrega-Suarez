import React from "react";

const Product = () => {
  return (
    <div>
      <div
        style={{
          display: "block",
          flexDirection: "column",
          maxWidth: "100%",
          justifyContent: "center",
          backgroundColor: "#dbdbdb",
          borderRadius: "5%",
        }}
      >
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto/28530d07245942fc944dae680084fb30_9366/Balon_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg"
          alt=""
        />
        <p style={{ fontSize: "30px" }}>Balón Qatar 2022</p>
        <p style={{ fontSize: "20px" }}>20$</p>
      </div>
    </div>
  );
};

export default Product;
