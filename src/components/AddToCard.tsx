import React, { Component } from 'react'
import { CartItem, useDispatchState } from './AppState';

export interface AddToCardProps{
    addToCard: (item: Omit<CartItem, "quantity">)=> void
}

export function withAddToCard<OriginalProps extends AddToCardProps>(ChildComponent: React.ComponentType<OriginalProps>) {
    function AddToCardHoc (props: Omit<OriginalProps, keyof AddToCardProps>){
        const dispatch = useDispatchState();
        const handlerAddToCart: AddToCardProps['addToCard'] = (item) => {
          dispatch({
            type: "ADD_ITEM",
            payload: {
              item
            },
          });
        };
        return <ChildComponent {...props as OriginalProps} addToCard={handlerAddToCart} />;
    }
    return AddToCardHoc; 
}