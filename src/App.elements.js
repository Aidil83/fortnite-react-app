import { Route } from "react-router-dom";
import styled from "styled-components/macro";

export const AppContainer = styled.div``;

export const RouteError = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  h1 {
    color: red;
    padding: 2rem;
    background-color: yellow;
    border-radius: 50%;
  }
`;
