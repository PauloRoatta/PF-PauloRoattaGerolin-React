import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <NavLink id="BrandNombre" to="/">Rockeala Indumentaria</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="LinkName" to="/">Inicio</NavLink>
                        <NavLink className="LinkName" to="/contacto">Contacto</NavLink>
                        <NavDropdown id="DropName" title="Productos" className="basic-nav-dropdown">
                            <NavLink className="LinksCategory" to="category/Remeras">Remeras</NavLink>
                            <NavLink className="LinksCategory" to="category/Buzo Cuello Redondo">Buzos Cuello Redondo</NavLink>
                            <NavLink className="LinksCategory" to="category/Buzo Canguro">Buzos Canguro</NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}