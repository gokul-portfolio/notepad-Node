import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
    BsPersonFill,
    BsFillBriefcaseFill,
    BsTelephoneFill,
    BsEnvelopeFill,
} from "react-icons/bs";

const TeamCard = ({ team }) => {
    return (
        <div className={`${team.className} mb-5`}>
            <h3 className="mb-3">{team.teamName}</h3>

            <Row>
                {team.members.map((member, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                        <Card className="team-card h-100">

                            <div className="member-avatar">
                                <BsPersonFill />
                            </div>

                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">
                                    <BsFillBriefcaseFill className="me-1" />
                                    {member.role}
                                </Card.Subtitle>

                                <div className="contact-info">
                                    <div>
                                        <BsTelephoneFill className="me-1" />
                                        {member.phone}
                                    </div>
                                    <div>
                                        <BsEnvelopeFill className="me-1" />
                                        {member.email}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TeamCard;
