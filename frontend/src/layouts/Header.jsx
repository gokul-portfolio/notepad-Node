import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { UserContext } from "../context/UserContext";
import LOGO from "../assets/images/logo.png";

function NavigationBar() {
  const { user, logoutUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar expand="md" className="custom-navbar">
        <Container>

          {/* LEFT : LOGO */}
          <Navbar.Brand as={Link} to="/dashboard">
            <img src={LOGO} alt="logo" height="40" />
          </Navbar.Brand>

          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler d-md-none"
            onClick={() => setShow(true)}
          >
            <FaBars />
          </button>

          {/* DESKTOP RIGHT */}
          <div className="right-controls d-none d-md-flex gap-3 align-items-center">

            {/* SEARCH */}
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search..." />
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
                    <span>{user?.name}</span>
                  </span>
                }
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    logoutUser();
                    window.location.href = "/signin";
                  }}
                >
                  <FiLogOut className="me-2" /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </div>
        </Container>
      </Navbar>

      {/* ================= OFFCANVAS (MOBILE) ================= */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <img src={LOGO} alt="logo" height="35" />
        </Offcanvas.Header>

        <Offcanvas.Body>

          {/* SEARCH */}
          <Form className="d-flex mb-4">
            <Form.Control type="search" placeholder="Search..." />
            <button className="search-btn ms-2" type="button">
              <FaSearch />
            </button>
          </Form>

          {/* PROFILE */}
         <h6 className="offcanvas-menu-title">Menu</h6>

          <Nav className="flex-column gap-2">
            <Nav.Link as={Link} to="/profile">
              <FaUserCircle className="me-2 border-bottom" />
              Profile
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                logoutUser();
                window.location.href = "/signin";
              }}
              className="text-danger border-bottom"
            >
              <FiLogOut className="me-2" />
              Logout
            </Nav.Link>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;
