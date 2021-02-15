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
  background-color: #e7e7e7;
  border-radius: 4px;
`;

export const LoginInner = styled.div`
  width: 90%;
  min-height: 430px;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .login-name {
    margin-bottom: 1em;
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-left: 0.15em;
  }
  & .login-username {
    margin-bottom: 0.3em;
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-left: 0.25em;
  }
  & .login-password {
    margin-top: 1.75em;
    margin-bottom: 0.3em;
    margin-left: 0.25em;
  }
  & input {
    height: 2.2rem;
    border: none;
    border-radius: 10px;
  }
  & .login-btn {
    margin: 3.5em auto;
    width: fit-content;
    padding: 1em 7em;
    background-color: #8000ff;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-family: Roboto;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 12px;
  }
  & .option-title {
    display: flex;
    width: 100%;
    align-self: center;
    align-items: center;
    font-family: Roboto;
    font-size: 12px;
    line-height: 14px;
    margin: 0.8em 0;
    color: #a6a6a6;
    & div {
      width: 200px;
      text-align: center;
    }
    & hr {
      width: 80%;
      border: none;
      height: 2px;
      background: #fff;
    }
  }
  & .login-demo {
    align-self: center;
    display: flex;
    align-items: center;
    margin-top: 2em;
    padding: 0.5em 1.8em;
    background: #e0ffe9;
    border-radius: 20px;
    border: 1px solid #a9a9a9;
    color: #6d6d6d;
    & .demo-logo {
      margin-right: 0.2em;
      font-size: 1.4rem;
      color: #00ff00;
    }
  }
`;
