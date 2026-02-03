import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

import api from "../api/axios";
import { UserContext } from "../context/UserContext";
import TeamCard from "../components/team/TeamCard";

const Team = () => {
  const { user } = useContext(UserContext);

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get("/users/team");
        setMembers(res.data);
      } catch (err) {
        setError("Failed to load team members");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <Container className="team-container py-5">
      <h2 className="text-center mb-5">Our Team</h2>

      {loading && (
        <div className="text-center">
          <Spinner />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !members.length && (
        <Alert variant="info">No team members found</Alert>
      )}

      <Row>
        {members.map((member) => (
          <Col md={4} key={member._id} className="mb-4">
            <TeamCard member={member} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
