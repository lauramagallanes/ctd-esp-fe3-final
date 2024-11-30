
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();
  console.log(id);
  const {state} = useGlobalStates();

  const [dentista, setDentista] = useState({});
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(()=> {
    axios(url)
    .then(({data})=>setDentista(data))
    .catch((error)=>console.log(error))
  }, [])
  
  console.log(dentista);
  
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <div className={`details-container ${state.theme}`}>
      <h1>Detail Dentist id </h1>
      <h2>Nombre: {dentista.name}</h2>
      <h3>Email: {dentista.email}</h3>
      <h3>Teléfono: {dentista.phone}</h3>
      <h3>Website: {dentista.website}</h3>

    </div>
     
    </>
  )
}

export default Detail