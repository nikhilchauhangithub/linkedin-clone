import React from "react";
import styled from "styled-components";
const Main = () => {
  return (
    <Container>
      <Sharebox>
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
      </Sharebox>
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
  border-radius: 8px;
  position: relative;
  border: none;
  wid
`;

const Sharebox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  @media (max-width: 768px) {
    width: 470px;
  }

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      flex-wrap: wrap;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      button {
        border-radius: 8px;
        color: #70b5f9;
        img {
          height: 25px;
          width: 30px;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
          color: #0a66c2;
        }
      }
    }
  }
`;

export default Main;
