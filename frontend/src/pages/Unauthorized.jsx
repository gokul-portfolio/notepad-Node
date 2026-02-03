import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsShieldLock, BsArrowLeft } from "react-icons/bs";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-page d-flex align-items-center">
      <Container className="text-center">

        <div className="unauthorized-card mx-auto">
          <BsShieldLock size={60} className="mb-3 text-danger" />

          <h1 className="mb-2">Access Denied</h1>

          <p className="text-muted mb-4">
            You do not have permission to access this page.
            <br />
            Please contact your administrator.
          </p>

          <Button
            variant="primary"
            className="d-inline-flex align-items-center gap-2"
            onClick={() => navigate("/dashboard")}
          >
            <BsArrowLeft /> Back to Dashboard
          </Button>
        </div>

      </Container>
    </div>
  );
};

export default Unauthorized;
