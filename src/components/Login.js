
import styled from "styled-components"


const Login = () => {
  return (
    <Container>
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt="linkedin logo" />
            </a>
            <div>
                <Join>join</Join>
                <SignIn>Sign in</SignIn>
            </div>
        </Nav>
    </Container>
  )
}

const Container = styled.div`
padding: 0px;
`;
const Nav =styled.div`
   max-width: 1128px;
   margin: auto;
   padding: 12px 0 16px;
   display: flex;
   align-items: center;
   position: relative;
   justify-content: space-between;
   flex-wrap: nowrap;
   

   & > a{
    width: 150px;
    height: 36px;
    @media (max-width: 768px){
        padding: 0 5px;

    }
   }
     `;

const Join =styled.a`
font-size: 16px;
border-radius: 4px;
text-decoration: none;
color: rgba(0,0,0,0.6);
padding: 12px;
text-transform: uppercase;
letter-spacing: 1.5px;
cursor: pointer;
font-weight: bold;
margin-right: 12px;

&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.8);
}
`;

const SignIn =styled.a`
padding: 10px 15px;
font-size: 16px;
border: solid 1px #0a66c2;
border-radius: 20px;
letter-spacing: 1px;
cursor: pointer;
color: #0a66c2;
transition-duration: 167ms;
font-weight: 600;
text-decoration: none;
&:hover{
    border: solid 2px #0a66c2;
    background-color: rgba(112,181,249,0.15);
}
`;


export default Login