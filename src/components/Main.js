import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { useState, useEffect } from "react";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticlesAPI();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
    }
  };

  return (
    <Container>
      <Sharebox>
        <div>
          {props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
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
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </Sharebox>

      <Content>
        {props.loading && <img src="/images/spin-loader.gif" alt="" />}
        {props.articles.length > 0 &&
          props.articles.map((article, key) => (
            <Article key={key}>
              <SharedActor>
                <a>
                  {article.actor.image ? (
                    <img src={article.actor.image} alt="" />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )}
                  <div>
                    <span>{article.actor.title}</span>
                    <span>{article.actor.description}</span>
                    <span>
                      {article.actor.date.toDate().toLocaleDateString()}
                    </span>
                  </div>
                </a>
                <button>
                  <img src="/images/ellipses.svg" alt="" />
                </button>
              </SharedActor>
              <Description>{article.description}</Description>
              <SharedImg>
                <a>
                  {!article.sharedImg && article.video ? (
                    <ReactPlayer width={"100%"} url={article.video} />
                  ) : (
                    article.sharedImg && <img src={article.sharedImg} alt="" />
                  )}
                </a>
              </SharedImg>

              <SocialActions>
                <button>
                  <img
                    src="https://www.svgrepo.com/show/499778/like.svg"
                    alt=""
                  />
                  <span>Like</span>
                </button>
                <button>
                  <img
                    src="https://www.svgrepo.com/show/499759/edit.svg"
                    alt=""
                  />
                  <span>Comments</span>
                </button>
                <button>
                  <img
                    src="https://www.svgrepo.com/show/499806/share.svg"
                    alt=""
                  />
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
          ))}
      </Content>

      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  margin-left: 15px;
  margin-right: 15px;
`;

const Commoncard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(Commoncard)`
  padding: 10px;
  margin: 13px;
  /* overflow: visible; */
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
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin: 8px 16px 0;
  background-color: #f9fafb;
  img {
    width: 100%;
    height: 100%;
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

const Content = styled.div`
  text-align: center;
  height: 50px;
  width: 100%;
  border-radius: 8px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticlesAPI: () => dispatch(getArticlesAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
