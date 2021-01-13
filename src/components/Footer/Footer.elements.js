import styled from "styled-components";

const media = {
  ipad: "@media only screen and (max-width: 768px)",
};

export const FooterMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43vh;
  width: 100%;
  background-color: #2a2a2a;
`;

export const FooterContainer = styled.div`
  height: 80%;
  width: 90%;
  background-color: #fae;
`;

export const FooterInnerContainer1 = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #ff1;
  color: #ccc;

  & .innerLeft {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 50%;
    height: 100%;
    background-color: orange;

    ul {
      display: flex;
      justify-content: space-around;
      max-width: 140px;
      font-size: 2.5rem;
      background-color: yellow;
    }

    div {
      display: flex;
      flex-flow: wrap column;
      height: 5vh;
      width: 300px;
      background-color: #dc143c;
      font-size: 0.8rem;

      a {
        text-decoration: none;
        color: #ccc;
      }
    }

    ${media.ipad} {
      width: 100%;
    }
  }

  & .innerRight {
    width: 50%;
    height: 100%;
    background-color: #0e9;
  }

  ${media.ipad} {
    flex-direction: column;
  }
`;

export const FooterInnerContainer2 = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 90%;
  background-color: #eaa;
`;
