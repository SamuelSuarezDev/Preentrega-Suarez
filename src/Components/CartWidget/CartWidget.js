/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const [id, setid] = useState("0");
  const [width, setwidth] = useState(screen.width);
  const { cartList, clearCart, clearItem } = useCartContext();
  useEffect(() => {
    cartList.map((prod) => {
      setid(prod.id);
    });
  }, [cartList]);

  const handleDelete = (id) => {
    clearItem(id);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Carrito:</h1>
      {cartList.length > 0 ? (
        <>
          {cartList.map((prod) => (
            <>
              {width > 768 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90vw",
                    border: "5px solid gray",
                    background: "#dbdbdb",
                    color: "gray",
                    textAlign: "center",
                    padding: "10px",
                    marginTop: "5%",
                  }}
                >
                  <img
                    src={prod.image}
                    alt="Productos de Refugio Tienda Deco"
                    style={{ width: "20%" }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <strong> Cantidad:</strong> <br />
                    <p>{prod.quantity} unidades</p>
                  </div>
                  <div style={{ textAlign: "center", width: "25%" }}>
                    <strong>Nombre:</strong> <br />
                    <p>{prod.title}</p>
                  </div>
                  <div>
                    <strong>Precio unidad:</strong> <br />
                    <p> {prod.price}$</p>
                  </div>
                  <div>
                    <strong>Precio total:</strong>
                    <p>{prod.price * prod.quantity}$</p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: "45%",
                      marginTop: "12%",
                    }}
                  ></div>
                  <div>
                    <img
                      onClick={() => handleDelete(prod.id)}
                      width={"30px"}
                      src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
                      alt=""
                    />
                  </div>
                </div>
              )}
              {width < 768 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90vw",
                    border: "5px solid gray",
                    background: "#dbdbdb",
                    color: "gray",
                    textAlign: "center",
                    padding: "10px",
                    marginTop: "5%",
                  }}
                >
                  <img
                    src={prod.image}
                    alt="Productos de Refugio Tienda Deco"
                    style={{ width: "20%" }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <strong> Cantidad:</strong> <br />
                    <p>{prod.quantity} unidades</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <strong>Nombre:</strong> <br />
                    <p>{prod.title}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <strong>Precio unidad:</strong> <br />
                    <p> {prod.price}$</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <strong>Precio total:</strong>
                    <p>{prod.price * prod.quantity}$</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <img
                      onClick={() => handleDelete(prod.id)}
                      width={"30px"}
                      src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </>
          ))}
          <br />
          <Link to={"/carBuy"}>
            <button
              style={{
                padding: "8px",
                background: "#dbdbdb",
                border: "5px solid gray",
                boxShadow: "4px 2px 5px gray",
              }}
            >
              Finalizar compra
            </button>
          </Link>
          <br />
          <div>
            <p onClick={clearCart}>
              <a href="">Vaciar carrito</a>
            </p>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Ooops, parece que no hay nada aqui</p>
          <Link to={"/"}>Comprar algo</Link>
        </div>
      )}
    </div>
  );
};
