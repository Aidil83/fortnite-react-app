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
  max-width: 320px;
  min-height: 90%;
  height: 100%;
  max-height: 800px;
  padding-top: 30px;
  margin-bottom: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    min-height: 600px;
  }
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
    font-size: clamp(1.2rem, 4vw, 1.7rem);
    line-height: 28px;
    margin-left: 0.15em;
  }
  & .login-username {
    margin-bottom: 0.3em;
    font-family: Roboto;
    font-weight: normal;
    font-size: clamp(1rem, 4vw, 1.3rem);
    line-height: 21px;
    margin-left: 0.25em;
  }
  & .login-password {
    margin-top: 1.75em;
    margin-bottom: 0.3em;
    margin-left: 0.25em;
    font-size: clamp(1rem, 4vw, 1.3rem);
  }
  & input {
    min-height: 2.2rem;
    height: 100vh;
    max-height: 2.7rem;
    max-width: 350px;
    border: none;
    border-radius: 10px;
  }
  & .login-btn {
    margin: 3em auto;
    width: fit-content;
    padding: 0.8em 6em;
    background-color: #8000ff;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-family: Roboto;
    text-transform: uppercase;
    font-size: clamp(0.8rem, 4vw, 1.1rem);
    line-height: 12px;
    cursor: pointer;
  }
  & .option-title {
    display: flex;
    width: 100%;
    align-self: center;
    align-items: center;
    font-family: Roboto;
    font-size: clamp(0.8rem, 4vw, 1rem);
    line-height: 14px;
    margin: 0.8em 0;
    color: #a6a6a6;
    & div {
      width: 200px;
      text-align: center;
    }
    & hr {
      width: 70%;
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
    margin-bottom: 2rem;
    padding: 0.5em 1.8em;
    padding-left: 1.1em;
    background: #e0ffe9;
    border-radius: 20px;
    border: 1px solid #a9a9a9;
    color: #6d6d6d;
    cursor: pointer;
    & .demo-logo {
      margin-right: 0.2em;
      font-size: clamp(1.4rem, 4vw, 1.8rem);
      color: #00ff00;
    }
    & .demo-name {
      font-size: clamp(1rem, 4vw, 1.1rem);
    }
  }
`;
