import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const Left = (props) => {
  return (
    <Container>
      <Artcard>
        <Userinfo>
          <Cardbackground />
          <a>
            <Photo />
            <WelcomeText>
              Welcome, {props.user ? props.user.displayName : "there!"}
            </WelcomeText>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </Userinfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </Artcard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow #</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: left;
  padding: 0px 15px 0px 5px;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const Artcard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  transition: box-shadow 83ms;
  position: relative;
  width: 100%;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.35);
  @media (max-width: 768px) {
    margin-bottom: 8px;
    width: 450px;
    line-height: 2;
  }
`;
const Userinfo = styled.div`
  padding: 12px 12px 16px;
  border: solid 1px rgba(0, 0, 0, 0.15);
`;
const Cardbackground = styled.div`
  background-image: url("/images/card-bg.svg");
  height: 70px;
  margin-bottom: 5px;
  background-position: center;
  background-size: 430px;
  border-radius: 5px;
`;
const AddPhotoText = styled.div`
  font-size: 14px;
  color: #0a66c2;
  font-weight: 600;
  line-height: 18px;
`;

const Photo = styled.div`
  background-image: url("/images/photo.svg");
  height: 56px;
  width: 60px;
  box-sizing: border-box;
  background-color: white;
  background-repeat: no-repeat;
  border: solid 2px white;
  margin: -30px auto 15px;
  border-radius: 8px;
`;

const WelcomeText = styled.text`
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
`;

const Widget = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 10px 20px 10px 20px;
  & > a {
    justify-content: space-between;
    display: flex;
    font-size: 11pt;
    /* align-items: center; */
    &:hover {
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 4px;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: start;
      font-weight: bold;
      width: 300px;
      span {
        line-height: 1.3;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.div`
  padding: 12px 12px 12px 18px;
  font-weight: bold;
  font-size: 11pt;
  text-align: start;
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(Artcard)`
  text-align: start;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 14px;
    &:hover {
      color: #0a66c2;
      font-weight: 600;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.5;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: solid 1px #d6cec2;
      padding: 12px;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Left);
