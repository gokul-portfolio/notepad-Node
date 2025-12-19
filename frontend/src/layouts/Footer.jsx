import React from "react";
import Container from "react-bootstrap/Container";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="custom-footer">

          <p className="footer-text">
            Designed & Developed with{" "}
            <span className="footer-author">
              <FaHeart className="heart-icon" /> Gokul
            </span>
          </p>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
