export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentistas: action.payload };
      case "ADD_FAVS":
        return { ...state, favs: [...state.favs, action.payload] };
    //   case "DELETE_CART":
    //     const filterCart = []; //Falta completar
    //     return { ...state, cart: filterCart };
      default:
        throw new Error("Acción no existente");
    }
  };