import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const GlobalStates = createContext();
const initialState = {
  dentistas: [],
  favs: lsFavs,
  theme: "light"
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(children);

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_DENTISTS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(state); // trae todos los estados guardados que fueron inicializados en initialState
  console.log(state.dentistas); // trae solo a los dentistas. Queda mosrarlos en las cards dentro de home




  return (
    <GlobalStates.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStates.Provider>
  )
}

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);