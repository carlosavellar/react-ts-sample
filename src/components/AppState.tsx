import React, { createContext, useContext, useReducer, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);

export const AppDispatchStateContext = createContext<React.Dispatch<AddToCard> | undefined>(undefined);

export const useDispathState = () => {
  const dispatch = useContext(AppDispatchStateContext);
  if (!dispatch) {
    throw new Error('NO dispatch in this context');
  }
  return dispatch;
};

interface Action<T> {
  type: T;
}

interface AddToCard extends Action<'ADD_TO_CARD'> {
  payload: {
    item: Omit<CartItem, 'quantity'>;
  };
}

const reducer = (state: AppStateValue, action: AddToCard) => {
  const itemToAdd = action.payload.item;
  switch (action.type) {
    case 'ADD_TO_CARD':
      const itemExist = state.cart.items.find((item) => item.id === itemToAdd.id);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExist
            ? state.cart.items.map((item) => {
                if (item.id === itemToAdd.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              })
            : [
                ...state.cart.items,
                {
                  id: itemToAdd.id,
                  name: itemToAdd.name,
                  price: itemToAdd.price,
                  quantity: 1,
                },
              ],
        },
      };
    default:
      return state;
  }
};

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchStateContext.Provider value={dispatch}>{children}</AppDispatchStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppContextProvider;
