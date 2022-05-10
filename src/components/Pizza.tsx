import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import { useDispatchState } from "./AppState";
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const dispatch = useDispatchState();

  const handlerAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          quantity: 1,
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

export default Pizza;
