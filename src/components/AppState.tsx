import React, { createContext, useState } from "react";

interface AppStateValue {
  cart: {
    items: { id: number; name: string; price: number }[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

const AppStateContext = createContext(defaultStateValue);

const AppContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultStateValue);

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppContextProvider;
