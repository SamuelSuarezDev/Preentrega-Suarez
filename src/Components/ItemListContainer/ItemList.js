/* eslint-disable eqeqeq */
import React from "react";
import Product from "./Components/Product/Product";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";

export const ItemList = ({ texto }) => {
  const { arrayProducts } = useProductContext();
  let location = useLocation();
  setInterval(() => {}, 5000);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {location.pathname != "/" ? (
        <>
          {arrayProducts[0].map(({ id, image, title, price, category }) => (
            <>
              {"/category/" + category == location.pathname && (
                <Product
                  key={id}
                  image={image}
                  title={title}
                  price={price}
                  to={"/item/" + id}
                />
              )}
            </>
          ))}
        </>
      ) : (
        <>
          {arrayProducts[0].map(({ id, image, title, price, category }) => (
            <>
              <>
                <div key={id}>
                  <Product
                    image={image}
                    title={title}
                    price={price}
                    to={"/item/" + id}
                  />
                </div>
              </>
            </>
          ))}
        </>
      )}
    </div>
  );
};

