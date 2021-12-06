
import { Link } from 'react-router-dom';
import Iconos from './Iconos';
import "./NavBar.css"


    const NavBar = () => {
      return (
          <nav id="navbar">
              <ul >
                  <li>
                  <Link to="/">INICIO</Link>
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
                    <Link to="/cart">
                         <Iconos />
                    </Link>

                  </li>
              </ul>
              
          </nav>
      )
  }
  
export default NavBar;