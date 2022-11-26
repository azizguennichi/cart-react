import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100ch;
  background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://static.nitrado.net/cdn/content_files/production/games/squad/offerpage/screenshots/squad-desktop.jpg")
      center;
  background-size: cover;
  display: flex;
  
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
   margin-top: 10px;
   margin-left: 50%;
  width: 40%;
  height: 70%;
  padding: 50px;
  background-color: #202020;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 500;
  color: white;
`;
const Stitle = styled.p`
 font-size: 10px;
  font-weight: 500;
  color: white;
`
const Para = styled.h2`
font-size: 15px;
font-weight: 400;
color: #606060;
`







const Squad = () => {
  return (
    <>
    <Container>
      
       <Wrapper>
        <Stitle>SQUAD SERVER HOSTING</Stitle>
        <Title>Squad</Title>
        <Para>Get your Squad Server Hosting from the market leader Nitrado at extremely low prices.
All settings can be configured in the web interface with a click of the mouse.

Squad is a tactical shooter developed by the Canadian studio Offworld Industries.
The game focuses on team play, leadership skills as well as communication and coordination.
The developers also attach great importance to reality.
Squad was developed with the aim of combining realistic simulations with military gunfire in a shooter.
With the help of real satellite data, huge, authentic maps for epic battles were created.
Up to 100 players can fight each other on these maps.</Para>
       </Wrapper>
    </Container></>
  )
}

export default Squad