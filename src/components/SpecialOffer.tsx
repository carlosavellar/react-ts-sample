import React from 'react';
import { Pizza } from './../types/types';
import PizzaCSS from './Pizza.module.css';
import { withAddToCard, AddToCardProps, WithAddToCardProps } from './AddToCard';

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
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
          <WithAddToCardProps>
            {({ addToCard }) => {
              return (
                <button
                  onClick={() => {
                    debugger;
                    addToCard({ id: pizza.id, name: pizza.name, price: pizza.price });
                  }}
                >
                  Add to cart
                </button>
              );
            }}
          </WithAddToCardProps>
        </p>
      </li>
    </div>
  );
};

export default SpecialOffer;
