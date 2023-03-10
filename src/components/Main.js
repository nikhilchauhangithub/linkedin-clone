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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="\images\shared-image.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://www.svgrepo.com/show/499778/like.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/404975/clapping-hands.svg"
                  alt=""
                />
                <span>80</span>
              </button>
            </li>
            <li>
              <a>8 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="https://www.svgrepo.com/show/499778/like.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="https://www.svgrepo.com/show/499759/edit.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="https://www.svgrepo.com/show/499806/share.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img
                src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg"
                alt=""
              />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
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
  border-radius: 8px;
  position: relative;
  border: none;
`;

const Sharebox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin-left: 15px;
  margin-right: 15px;
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

const Article = styled(Commoncard)`
  padding: 10px;
  margin: 13px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding: 10px;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      border-radius: 8px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      padding-top: 13px;
      height: 17px;
    }
  }
`;

const Description = styled.div`
  text-align: left;
  padding-left: 5px;
  position: relative;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  border-radius: 8px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
const SocialCounts = styled.ul`
  img {
    height: 25px;
    padding-right: 4px;
  }
  line-height: 1.5;
  display: flex;

  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 15px;
    margin-top: auto;
    margin-bottom: auto;
    button {
      display: flex;
      align-items: center;
      border: none;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      padding: 6px;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 40px;
  button {
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    background: transparent;
    padding: 5px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
    img {
      height: 20px;
      width: 30px;
    }

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
