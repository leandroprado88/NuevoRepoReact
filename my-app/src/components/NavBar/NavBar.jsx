import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Iconos from './Iconos';


const NavBar = ()=> {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand Link to="/">La Tienda del oeste</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/categorias/buzos">Buzos</Link>
          <Link to="/categorias/remeras">Remeras</Link>
          <Link to="/categorias/shorts">Shorts</Link>
          <NavDropdown title="Deportes" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action4">Fútbol</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Running</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action6">
              Registrese
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" >
            <Iconos/>
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>)
  }

export default NavBar;