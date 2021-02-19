import styled from "styled-components/macro";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    45.93% 79.75% at 51% 47%,
    rgba(20, 0, 255, 0.273292) 0%,
    #6633d1 59.98%,
    #4c309b 110.99%,
    #4c309b 100%
  );
`;

export const LoginBackdrop1 = styled.img`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 600px;
`;

export const LoginBackdrop2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 30px;
  width: 600px;
`;

export const LoginContainer = styled.div`
  position: relative;
  z-index: 1;
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
  box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    min-height: 600px;
  }
`;

export const LoginInner = styled.form`
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
  & .input-container {
    min-height: 2.2rem;
    height: 100vh;
    max-height: 2.7rem;
    max-width: 350px;
    padding: 1em 0;

    & input {
      border: none;
      border-radius: 10px;
      padding: 0.75em 1em;
      width: 100%;
      font-size: 1rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 5px #b038ff;
      }
    }
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
    &:hover {
      background-color: #7301e6;
    }
    &:focus {
      outline: none;
      background-color: #5a01b4;
    }
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
    background-color: #f5f5f5;
    border-radius: 15px;
    border: 1px solid #7c7c7c;
    color: #6d6d6d;
    cursor: pointer;
    &:hover {
      background-color: #fdff7c;
      color: #000;
      border: 1px solid #e7e7e7;
      & .demo-logo {
        color: #00e239;
      }
    }
    &:focus {
      outline: none;
      background-color: #fdff7c;
      color: #000;
      border: 1px solid #e7e7e7;
    }
    & .demo-logo {
      margin-right: 0.2em;
      font-size: clamp(1.4rem, 4vw, 1.8rem);
      color: #5bc3ff;
    }
    & .demo-name {
      font-size: clamp(1rem, 4vw, 1.1rem);
    }
  }
`;
