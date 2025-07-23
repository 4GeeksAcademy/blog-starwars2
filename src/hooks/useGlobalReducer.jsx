import React, { createContext, useReducer, useContext } from "react";
import { initialStore, storeReducer } from "../store";

export const Context = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  const actions = {
    loadPeople: async () => {
      const res = await fetch("https://www.swapi.tech/api/people");
      const data = await res.json();
      dispatch({ type: "SET_PEOPLE", payload: data.results });
    },
    loadVehicles: async () => {
      const res = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await res.json();
      dispatch({ type: "SET_VEHICLES", payload: data.results });
    },
    loadPlanets: async () => {
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      dispatch({ type: "SET_PLANETS", payload: data.results });
    },
    addFavorite: (item) => dispatch({ type: "ADD_FAVORITE", payload: item }),
    removeFavorite: (uid) => dispatch({ type: "REMOVE_FAVORITE", payload: uid })
  };

  return (
    <Context.Provider value={{ store, actions, dispatch }}>
      {children}
    </Context.Provider>
  );
};

const useGlobalReducer = () => useContext(Context);
export default useGlobalReducer;
