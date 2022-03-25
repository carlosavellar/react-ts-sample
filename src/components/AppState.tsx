import React, { createContext, useState } from "react";

interface AppDefaultState {
  cart: {
    items: {
      name: string;
      price: string;
    }[];
  };
}

const defaultStateValue: AppDefaultState = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);

export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<AppDefaultState>> | undefined
>(undefined);

const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, { createContext, useState } from "react";

// interface AppStateValue {
//   cart: {
//     items: {
//       name: string;
//       price: number;
//     }[];
//   };
// }

// const defaultStateValue: AppStateValue = {
//   cart: {
//     items: [],
//   },
// };

// const AppStateContext = createContext(defaultStateValue);

// const AppStateProvider: React.FC = ({ children }) => {
//   const [state, setState] = useState(defaultStateValue);
//   return (
//     <AppStateContext.Provider value={state}>
//       {children}
//     </AppStateContext.Provider>
//   );
// };
