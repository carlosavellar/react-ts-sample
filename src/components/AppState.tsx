import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

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

interface Action<T> {
  type: T;
}

interface AddToCardAction extends Action<"ADD_TO_CARD"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

interface InitializeAction extends Action<"INITIALIZE_CART"> {
  payload: {
    cart: AppStateValue["cart"];
  };
}

const reducer = (
  state: AppStateValue,
  action: AddToCardAction | InitializeAction
) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      const itemToAdd = action.payload.item;
      const itemExist = state.cart.items.find(
        (item) => item.id === itemToAdd.id
      );
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
    case "INITIALIZE_CART":
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};

export const AppStateContext = createContext(defaultStateValue);

export const AppDispatchStateContext = createContext<
  React.Dispatch<AddToCardAction> | undefined
>(undefined);

export const useDispatchState = () => {
  const dispatch = useContext(AppDispatchStateContext);
  if (!dispatch) {
    throw new Error("NO dispatch in this context");
  }
  return dispatch;
};

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({
        type: "INITIALIZE_CART",
        payload: { cart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchStateContext.Provider value={dispatch}>
        {children}
      </AppDispatchStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppContextProvider;
