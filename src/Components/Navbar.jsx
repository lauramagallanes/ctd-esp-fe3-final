
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.inicio}> <h4>Home</h4> </Link>
      <Link to={routes.contacto}> <h4>Contacto</h4> </Link>      
      <Link to={routes.destacados}> <h4>Favs</h4> </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar