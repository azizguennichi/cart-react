import styled from "styled-components";
import { mobile } from "../responsive";
import Bfooter from "./Bfooter";
import Slide from "./Slide";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://oneesports.azureedge.net/cdn-data/2021/05/CallOfDuty_Warzone_Graphic.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Signup = () => {
  return (
    <>
    
    <Container>
    <Slide />
      <Wrapper>
      
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link className="hover:bg-red-300 py-2 px-2">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link className="hover:bg-blue-200 py-2 px-2">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Bfooter />
    </>
  );
};

export default Signup;
