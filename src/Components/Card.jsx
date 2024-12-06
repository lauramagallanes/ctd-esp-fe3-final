import { Link } from "react-router-dom";
import { useGlobalStates } from "../Context/Context";

const Card = ({ dentista }) => {

  const { state, dispatch } = useGlobalStates();

  const findFav = state.favs.some((fav) => fav.id === dentista.id);
  console.log(findFav)

  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAVS", payload: dentista });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${dentista.id}`}>

        <img src="public\images\doctor.jpg" alt="" width={"100%"} />
        <h3>{dentista.name}</h3>
        <h4>{dentista.username} </h4>
        <h5>{dentista.id}</h5>
      </Link>


      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={toggleFav} className="favButton">{findFav ? "🌟 Quitar" : "⭐ Añadir"}</button>
    </div>
  );
};

export default Card;
