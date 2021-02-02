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
  background-image: url(${({img}) => img});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #ccc; */
`;

export const RouteErrorImage = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
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
        font-weight: bold;
        font-size: 5rem;
        line-height: 45px;
        text-align: center;
        letter-spacing: 0.05em;
      }
      h4 {
        align-self: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 56px;
        text-align: center;
        letter-spacing: 0.05em;
      }
    }
  }
`;