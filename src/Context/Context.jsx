import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";


export const GlobalStates = createContext();
    const initialState = {
        dentistas: [],
        favs: [],
        theme: "light"
    };

    const url = "https://jsonplaceholder.typicode.com/users"

      
  const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(children);

    useEffect(() => {
        axios(url)
          .then((res) => {
            console.log(res.data);
            dispatch({ type: "GET_DENTISTS", payload: res.data });
            //setRecipes(res.data.recipes);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log(state); // trae todos los estados guardados que fueron inicializados en initialState
      console.log(state.dentistas);
      
      
    
    return(
        <GlobalStates.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates);