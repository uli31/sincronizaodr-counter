
import React from 'react'
import { Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import { BrowserRouter as  Rouer,Switch,Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rbw from '../assets/img/rbw-01.png';
import '../index.css';
import Cardwidget from './Cardwidget';


const NavBar= ()=> {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img src={rbw}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#">Precios</Nav.Link>
      <NavDropdown title="Paquetes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Relajantes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Paquete 3</NavDropdown.Item>
        <NavDropdown.Divider />
     
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Nosostros</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Cardwidget contador={2} />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>  
    )
}
export default NavBar;