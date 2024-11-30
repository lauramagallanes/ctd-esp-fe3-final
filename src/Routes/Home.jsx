import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useGlobalStates();
  console.log(state.dentistas); // con state.dentistas me traigo a todos los dentistas a los que hago fetch en Context
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map((dentista)=><Card key={dentista.id} dentista={dentista}/>)}
        
      </div>
    </main>
  )
}

export default Home