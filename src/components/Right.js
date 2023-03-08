import React from "react";
import styled from "styled-components";

const Right = () => {
  return (
    <Container>
      <FollowCard>
        <Title>Add to feed</Title>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: right;
`;

const FollowCard = styled.div`
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  transition: box-shadow 83ms;
  position: relative;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.35);
`;

export default Right;
