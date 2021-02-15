import styled from "styled-components/macro";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 85%;
  min-height: 80vh;
  height: 100%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lime;
`;

export const LoginInner = styled.div`
  width: 90%;
  min-height: 430px;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .login-name {
    margin-bottom: 1em;
  }
  & .username {
    margin-bottom: 0.2em;
  }
  & input {
    height: 2rem;
    border: none;
    border-radius: 4px;
  }
`;
