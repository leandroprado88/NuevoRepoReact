
import { Link } from 'react-router-dom';
import Iconos from './Iconos';


    const NavBar = () => {
      return (
          <nav id="navbar">
              <ul >
                  <li>
                  <Link to="/">INICIO</Link>
                  </li>
                  <li>
                      <Link to="/categoria/buzos">Buzos</Link>
                  </li>
                  <li>
                      <Link to="/categoria/remmeras">Remeras</Link>
                  </li>
                  <li>
                      <Link to="/categoria/shorts">Shorts</Link>
                  </li>
                  <li>
                     <Iconos />
                  </li>
              </ul>
              
          </nav>
      )
  }
  
export default NavBar;