import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
  }
  .text-1{
      color: #07B6E2;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: #FB4A1E;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
      <Title>
        Unleash Your Interview Potential
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">AI-power.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Get the job!</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />

      </Title>
      <SubTitle>Receive personalized guidance and feedback from our AI interview coach
      </SubTitle>
      <ButtonContainer>
        <Link to="/lists"><Button text="Try it out" link="/lists" /></Link>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
