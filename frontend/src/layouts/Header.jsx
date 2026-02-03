import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { UserContext } from "../context/UserContext";
import LOGO from "../assets/images/logo.png";

function NavigationBar() {

  const { user, logoutUser } = useContext(UserContext);

  return (
    <Navbar expand="md" className="custom-navbar">
      <Container>

        {/* LEFT : LOGO */}
        <Navbar.Brand as={Link} to="/notes">
          <img src={LOGO} alt="logo" height="40" />
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle aria-controls="offcanvasNavbar">
          <FaBars />
        </Navbar.Toggle>

        {/* RIGHT SIDE */}
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={LOGO} alt="logo" height="35" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex align-items-center justify-content-end gap-3">

            {/* SEARCH */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search notes..."
              />
              <button className="search-btn ms-2" type="button">
                <FaSearch />
              </button>
            </Form>

            {/* PROFILE */}
            <Nav>
              <NavDropdown
                align="end"
                title={
                  <span className="d-flex align-items-center gap-2">
                    <FaUserCircle size={26} />
                    <span className="fw-medium">
                      {user?.name || "Account"}
                    </span>
                  </span>
                }
              >
                <NavDropdown.Item as={Link} to="/profile">
                  <FaUserCircle className="me-2" />
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={() => {
                    logoutUser();
                    window.location.href = "/signin";
                  }}
                >
                  <FiLogOut className="me-2" />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;
