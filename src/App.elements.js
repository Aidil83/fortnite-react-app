import styled from "styled-components/macro";

export const AppContainer = styled.div``;

export const RouteError = styled.div`
  position: relative;
  top: 51px;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #ccc; */
`;

export const RouteErrorImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 81px;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: contain;
  & .container {
    width: 100%;
    height: 100%;
    & .inner-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      h1 {
        font-family: "Roboto";
        text-transform: uppercase;
        font-style: normal;
        font-weight: normal;
        font-size: 3rem;
        line-height: 45px;
        text-align: center;
        letter-spacing: 0.05em;
      }
      h4 {
        align-self: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.05em;
      }
    }
  }
`;