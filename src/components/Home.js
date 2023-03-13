import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Content>
        <Section>
          <h4>
            <a>Are you Hiring, in a Hurry? -</a>
          </h4>
          <p>
            LinkedIn is a business and employment-focused social media platform
            that works through websites and mobile apps{" "}
          </p>
        </Section>
        <Layout>
          <Left />
          <Main />
          <Right />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 85px;
  max-width: 100%;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    letter-spacing: 1.1px;
  }
  h4 {
    letter-spacing: 1.1px;
    padding-bottom: 4px;
    color: #0a66c2;
  }
  p {
    font-size: 16px;
    color: #434649;
    font-weight: bold;
  }
`;

const Layout = styled.div`
  align-content: center;
  text-align: center;
  margin-top: 10px;
  display: grid;
  grid-template-areas: "left main right";
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
