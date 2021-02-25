import styled from "styled-components/macro";

export const AppContainer = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const RouteError = styled.div`
  position: relative;
  top: 51px;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RouteErrorImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .container {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin-top: 10%;
    & .inner-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      h1 {
        font-family: "Roboto";
        text-transform: uppercase;
        font-style: normal;
        font-weight: bold;
        font-size: clamp(1.5rem, 7vw, 5rem);
        text-align: center;
        letter-spacing: 0.05em;
      }
      h4 {
        align-self: center;
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(0.9rem, 2vw, 1.7rem);
        line-height: 26px;
        width: 95%;
        text-align: center;
        letter-spacing: 0.05em;
        @media screen and (min-width: 375px) {
          width: 80%;
        }
        @media screen and (min-width: 678px) {
          line-height: 46px;
        }
      }
    }
  }
`;
