import React from "react";
import Product from "./Components/Product/Product";
import { useParams } from "react-router-dom";

export const arrayProducts = [
  {
    id: "1",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/28530d07245942fc944dae680084fb30_9366/Balon_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg",
    title: "Balon Qatar 2022",
    price: "20$",
  },
  {
    id: "2",
    image: "https://cf.shopee.com.co/file/2b13bdd343e18add613efc21b6c466b7_tn",
    title: "Guayos Adidas",
    price: "50$",
  },
];
const ItemListContainer = ({ texto }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayProducts);
    }, 3000);
  });
  promise.then((res) => {
    console.log(res);
  });
  return (
    <div
      style={{
        margin: "30% 0",
        zIndex: "-1",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {texto}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {arrayProducts.map(({ id, image, title, price }) => (
          <Product
            key={id}
            image={image}
            title={title}
            price={price}
            to={"/item/" + id}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
