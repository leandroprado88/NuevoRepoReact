
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import Iconos from './Iconos';
import "./NavBar.css"


    const NavBar = () => {
    
    const {contadorItems} = useCartContext()

      return (
          <nav id="navbar">
              <ul >
                  <li>
                  <Link to="/">Inicio</Link>
                  </li>
                  <li>
                      <Link to="/categoria/Buzos">Buzos</Link>
                  </li>
                  <li>
                      <Link to="/categoria/Remeras">Remeras</Link>
                  </li>
                  <li>
                      <Link to="/categoria/Shorts">Shorts</Link>
                  </li>
                  <li>
                    <Link to="/cart">  <Iconos /> {contadorItems()}</Link>
                  </li>
              </ul>
              
          </nav>
      )
  }
  
export default NavBar;