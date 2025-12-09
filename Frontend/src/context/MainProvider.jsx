import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [state, setState] = useState({
    principal: 0,
    yearlyRate: 0,
    years: 0,
    monthlyPayment: 0,
    schedule: [],
    error:false
  });

  return (
    <MainContext.Provider value={{ state, setState }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMain() {
  return useContext(MainContext);
}
