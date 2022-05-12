import React, { useContext } from "react";
import { Pizza } from "./../types/types";
import PizzaCSS from "./Pizza.module.css";
import { useDispatchState } from "./AppState";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const dispatch = useDispatchState();
  const handlerAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
    });
  };
  return (
    <div>
      <li className={PizzaCSS.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <p>
          <strong>🍕</strong>
        </p>
        <p>
          <button onClick={handlerAddToCart}>Add to cart</button>
        </p>
      </li>
    </div>
  );
};

export default SpecialOffer;
