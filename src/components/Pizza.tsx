import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import { useDispatchState } from "./AppState";
import { Pizza } from "./../types/types";

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
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
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <p>
        <button onClick={handlerAddToCart}>Add to cart</button>
      </p>
    </li>
  );
};

export default PizzaItem;
