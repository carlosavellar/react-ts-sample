import React from "react";
import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";
import AppCss from "./App.module.css";
import LogoSvg from "./../assets/svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <LogoSvg width={120} height={120} />
          <div className={AppCss.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} key={pizza.id} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
