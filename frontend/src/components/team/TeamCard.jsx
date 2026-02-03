import React from "react";
import { Card } from "react-bootstrap";
import {
  BsPersonFill,
  BsFillBriefcaseFill,
  BsTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";

const TeamCard = ({ member }) => {
  return (
    <Card className="team-card h-100 text-center">

      {/* Avatar */}
      <div className="member-avatar py-4">
        <BsPersonFill size={40} />
      </div>

      <Card.Body>
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
  );
};

export default TeamCard;
