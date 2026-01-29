import React from "react";
import { Container } from "react-bootstrap";

import { teamData } from "../data/teamData";
import TeamCard from "../components/team/TeamCard";

const Team = () => {
  return (
    <Container className="team-container py-5">
      <h2 className="text-center mb-5">Our Team</h2>

      {teamData.map((team, index) => (
        <TeamCard key={team.id || index} team={team} />
      ))}
    </Container>
  );
};

export default Team;
  