import styled from "styled-components";

const media = {
  ipad: "@media only screen and (max-width: 768px)",
};

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43vh;
  width: 100%;
  background-color: #2a2a2a;
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 90%;
  background-color: #ff1;
  color: #ccc;

  ${media.ipad} {
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
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
`;
export const FooterRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #0e9;
`;
