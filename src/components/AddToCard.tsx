import React, { Component } from 'react';
import { CartItem, useDispatchState } from './AppState';

export interface AddToCardProps {
  addToCard: (item: Omit<CartItem, 'quantity'>) => void;
}

// sharing addToCard funcionality with a HOC as argument
export function withAddToCard<OriginalProps extends AddToCardProps>(ChildComponent: React.ComponentType<OriginalProps>) {
  function AddToCardHoc(props: Omit<OriginalProps, keyof AddToCardProps>) {
    const dispatch = useDispatchState();
    const handlerAddToCart: AddToCardProps['addToCard'] = (item) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          item,
        },
      });
    };
    return <ChildComponent {...(props as OriginalProps)} addToCard={handlerAddToCart} />;
  }
  return AddToCardHoc;
}

// sharing addToCard funcionality using props, in this case addTocard funcio... is function being passed as a children
export const WithAddToCardProps: React.FC<{ children: (props: AddToCardProps) => JSX.Element }> = ({ children }) => {
  const dispatch = useDispatchState();
  const addToCard: AddToCardProps['addToCard'] = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item,
      },
    });
  };
  return children({ addToCard });
};

// sharing addToCard using HOOK. Hook function can or cannot use hook

//
