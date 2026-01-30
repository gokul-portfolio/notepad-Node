import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import {
    FaBars,
    FaPlus,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

import LOGO from "../assets/images/logo.png";

function NavigationBar() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/signin";
    };


    return (
        <Navbar expand="md" className="custom-navbar">
            <Container>

                {/* LOGO */}
                <Navbar.Brand as={Link} to="/notes">
                    <img src={LOGO} alt="logo" height="40" />
                </Navbar.Brand>

                {/* MOBILE TOGGLER */}
                <Navbar.Toggle aria-controls="offcanvasNavbar">
                    <FaBars />
                </Navbar.Toggle>

                {/* OFFCANVAS */}
                <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src={LOGO} alt="logo" height="35" />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className="align-items-center">

                        {/* CREATE NOTE BUTTON */}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/notes/new" className="btn btn-primary text-white">
                                <FaPlus /> Create Note
                            </Nav.Link>
                        </Nav>

                        {/* SEARCH */}
                        <Form className="d-flex me-md-3 my-3 my-md-0">
                            <Form.Control
                                type="search"
                                placeholder="Search notes..."
                            />
                            <button className="search-btn ms-2">
                                <FaSearch />
                            </button>
                        </Form>

                        {/* PROFILE */}
                        <NavDropdown
                            align="end"
                            title={<FaUserCircle size={28} />}
                        >
                            <NavDropdown.Item as={Link} to="/profile">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout} >
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;
