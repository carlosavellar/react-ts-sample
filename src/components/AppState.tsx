import React, { createContext, useContext, useReducer, useState } from "react";

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

export const AppDispatchContext = createContext<
  React.Dispatch<AddToCardAction> | undefined
>(undefined);

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error("NO setState in this context");
  }
  return dispatch;
};

interface Action<T> {
  type: T;
}

interface AddToCardAction extends Action<"ADD_TO_CARD"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

const reducer = (state: AppStateValue, action: AddToCardAction) => {
  const itemToAdd = action.payload.item;
  const itemExist = state.cart.items.find((item) => item.id === itemToAdd.id);
  switch (action.type) {
    case "ADD_TO_CARD":
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
            : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
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
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppContextProvider;
