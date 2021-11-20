
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Iconos from './Iconos';


const NavBar = ()=> {
  return (
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">La Tienda del oeste</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Remeras</Nav.Link>
        <NavDropdown title="Deportes" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Fútbol</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Running</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
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

export default Navbar;