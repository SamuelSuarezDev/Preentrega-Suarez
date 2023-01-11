import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const arrayProducts = [
    [
      {
        id: "1",
        image:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/28530d07245942fc944dae680084fb30_9366/Balon_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg",
        title: "Balon Qatar 2022",
        price: "20",
        category: "3",
      },
      {
        id: "2",
        image:
          "https://cf.shopee.com.co/file/2b13bdd343e18add613efc21b6c466b7_tn",
        title: "Guayos Adidas",
        price: "50",
        category: "2",
      },
      {
        id: "3",
        image:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/9f566640861a40d08111ab09012a3581_9366/Balon_UCL_Finale_Estambul_Competition_Blanco_FH7341_01_standard.jpg",
        title: "Balón UCL Estambul Competition",
        price: "25",
        category: "3",
      },
      {
        id: "4",
        image:
          "data:image/jpeg;base64,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",
        title: "Guayos Nike Zoom Mercurial Superfly 9 Elite FG",
        price: "200",
        category: "2",
      },
      {
        id: "5",
        image:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/7e8429016f8b48e88dbdaefd00df2f68_9366/Jersey_Visitante_Authentic_Seleccion_Nacional_de_Mexico_Beige_HD9313_HM1.jpg",
        title: "Jersey visitante authentic selección nacional de México ",
        price: "5",
        category: "1",
      },
      {
        id: "6",
        image:
          "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/217021f5322942aeb8baaefd00f5385e_9366/camiseta-de-jugador-visitante-colombia-22.jpg",
        title: "Camiseta y Uniforme Visitante Selección Colombia 2022",
        price: "3",
        category: "1",
      },
    ],
  ];

  return (
    <ProductContext.Provider
      value={{
        arrayProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
