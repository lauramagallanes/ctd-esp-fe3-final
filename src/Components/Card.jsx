import React from "react";


const Card = ({ dentista }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  console.log(dentista);
  

  return (
    <div className="card">
      <img src="public\images\doctor.jpg" alt="" width={"100%"}/>
      <h3>{dentista.name}</h3>
      <h4>{dentista.username} </h4>
      <h5>{dentista.id}</h5>
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
