import React from "react";
import { Col, Card } from "react-bootstrap";
import {
  BsPersonFill,
  BsFillBriefcaseFill,
  BsTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";

const TeamCard = ({ member }) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="team-card h-100">

        {/* Avatar */}
        <div className="member-avatar text-center py-4">
          <BsPersonFill size={40} />
        </div>

        <Card.Body className="text-center">
          {/* Name */}
          <Card.Title>{member.name}</Card.Title>

          {/* Designation */}
          <Card.Subtitle className="mb-3 text-muted">
            <BsFillBriefcaseFill className="me-1" />
            {member.designation}
          </Card.Subtitle>

          {/* Contact Info */}
          <div className="contact-info text-start">
            {member.phone && (
              <div className="mb-2">
                <BsTelephoneFill className="me-2" />
                {member.phone}
              </div>
            )}

            {member.email && (
              <div>
                <BsEnvelopeFill className="me-2" />
                {member.email}
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamCard;
