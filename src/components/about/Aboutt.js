import React from "react";
import "./Aboutt.css";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://server.nitrado.net/_nuxt/img/server_room.e41a1f4.png") center;
  transform: perspective(3d);
`;

const Aboutt = () => {
  return (
    <>
      <Container>      
        <h1 className="text-center absolute  left-1/4  bottom-2/3 text-5xl max-w-5xl">
          YOUR WORLD! YOUR RULES!
          </h1>
        <div className="absolute left-1/4 bottom-50 h-16 max-w-5xl">

          <div className=" relative w-50 h-1 left-auto align-middle  text-center bg-yellow-400">
            <br/>
            <p className=" flex">
              Nitrado makes multiplayer gaming better. Customer experience is
              our  top priority and we use better technology in  several locations
              in combination with outstanding customer service to ensure players
              get what they want.
            </p>
          </div>
          

        </div>
        </Container>
  
    </>
  );
};

export default Aboutt;
