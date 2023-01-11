import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem(`cartList`)) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const clearItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  function addItem(items) {
    let product = cartList.find((pro) => pro.id == items.id);
    if (product == undefined) {
      setCartList([
        {
          image: items.image,
          id: items.id,
          title: items.title,
          price: items.price,
          quantity: items.quantity,
        },
        ...cartList,
      ]);
      return;
    }
    if (product) {
      let prevArray = [
        {
          image: items.image,
          id: items.id,
          title: items.title,
          price: items.price,
          quantity: items.quantity + product.quantity,
        },
      ];
      cartList.forEach((object) => {
        if (object.id !== product.id) {
          prevArray.push(object);
        }
      });

      setCartList(prevArray);
    }
  }
  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        clearCart,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
