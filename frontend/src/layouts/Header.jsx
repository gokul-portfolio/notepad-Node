import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import {
    FaChevronDown,
    FaBars,
    FaPhoneAlt,
    FaEnvelope,
    FaSearch
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import LOGO from '../assets/images/logo.png'

function NavigationBar() {
    return (
        <>
            <Navbar expand="md" className="mb-3 custom-navbar">
                <Container>

                    {/* BRAND */}
                    <Navbar.Brand href="#">
                        <img
                            src={LOGO}
                            alt="logo"
                            height="40"
                            className="logo-img"
                        />
                    </Navbar.Brand>

                    {/* CUSTOM TOGGLER ICON */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar">
                        <FaBars size={25} />
                    </Navbar.Toggle>

                    {/* OFFCANVAS */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="end"
                        className="offcanvas"
                    >
                        <Offcanvas.Header closeButton closeVariant="white">
                            <IoMdClose size={28} />
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="ms-2">
                                <img src={LOGO} alt="logo" height="35" className="logo-img" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
                                <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>

                                {/* DROPDOWN */}
                                <NavDropdown
                                    title={<span>More <FaChevronDown /></span>}
                                    id="offcanvasNavbarDropdown"
                                >
                                    <NavDropdown.Item href="#action1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#logout">
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            {/* SEARCH */}
                            <div className="search-wrapper my-3">
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search..."
                                        className="me-2 search-input"
                                    />
                                    <button className="search-btn"><FaSearch /></button>
                                </Form>
                            </div>

                            {/* CONTACT SECTION */}
                            <div className="mt-4 contact-box">
                                <h5>Contact Us</h5>
                                <p><FaPhoneAlt />  +91 98765 43210</p>
                                <p><FaEnvelope /> support@example.com</p>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
