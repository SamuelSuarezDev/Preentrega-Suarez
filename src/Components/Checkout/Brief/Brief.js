import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Brief = () => {
  const { clearCart, cartList } = useCartContext();
  const db = getFirestore();
  // eslint-disable-next-line no-restricted-globals
  const [showId, setShowId] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dbref = collection(db, "Buys");
  let array = [];
  cartList.map((doc) => {
    array.push({
      id: doc.id,
      title: doc.title,
      price: doc.price,
    });
  });
  const total = cartList.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const handleBuy = async () => {
    const data = {
      name: name,
      phone: phone,
      email: email,
    };
    if (name != "" && phone != "" && email != "") {
      const order = {
        buyer: data,
        items: array,
        date: new Date(),
        total: total,
      };
      addDoc(dbref, order).then(({ id }) => {
        setId(id);
        setShowId(true);
        clearCart();
      });
    } else {
      alert("Todos los campos son obligatortios");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <img style={{ margin: "40px" }} width={"200px"} alt="" />
      {!showId && (
        <>
          <label for="">Nombre</label>
          <input
            onChange={(event) => setName(event.target.value)}
            style={{ padding: "10px" }}
            type="text"
          ></input>
          <label for="">Teléfono</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            style={{ padding: "10px" }}
            type="number"
          ></input>
          <label for="">Correo</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            style={{ padding: "10px" }}
            type="email"
          ></input>
          <button
            onClick={handleBuy}
            style={{ padding: "10px", margin: "50px" }}
            type="submit"
          >
            Finalizar Compra
          </button>
        </>
      )}
      {showId && (
        <>
          <p>Felicidades por su compra, el su id de compra es de {id}</p>
        </>
      )}
      <Link to={"/"}>Volver a inicio</Link>
    </div>
  );
};
