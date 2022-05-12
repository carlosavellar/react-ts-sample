import React from "react";
import pizzas from "../data/pizzas.json";
import PizzaItem from "./Pizza";
import Cart from "./Cart";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import AppContextProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const spacialOffer = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppContextProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {spacialOffer && <SpecialOffer pizza={spacialOffer} />}
        <ul>
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppContextProvider>
  );
};

export default App;
