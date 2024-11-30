
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useGlobalStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useGlobalStates();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" }); 
  };

  return (
    <nav>
      <Link to={routes.inicio}> <h4>Home</h4> </Link>
      <Link to={routes.contacto}> <h4>Contacto</h4> </Link>      
      <Link to={routes.destacados}> <h4>Favs</h4> </Link>
      
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar