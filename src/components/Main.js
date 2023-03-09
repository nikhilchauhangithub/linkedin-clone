import React from "react";
import styled from "styled-components";
const Main = () => {
  return (
    <Container>
      <Sharebox>Share</Sharebox>
      <div>
        <img src="/images/user.svg" alt="" />
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src="/images/photo-icon.svg" alt="" />
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/video-icon.svg" alt="" />
          <span>Video</span>
        </button>
        <button>
          <img src="/images/event-icon.svg" alt="" />
          <span>Events</span>
        </button>
        <button>
          <img src="/images/article-icon.svg" alt="" />
          <span>Write article</span>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const Commoncard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;

const Sharebox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgb(0, 0, 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export default Main;
