import styled, { css } from "styled-components/macro";

const media = {
  phone: "max-width: ",
};

export const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  min-height: 420px;
  width: 100%;
  background-color: #2a2a2a;
`;
export const MainContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: #fafa;
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 180px;
  background-color: #000;

  ul {
    width: 170px;
    display: flex;
    justify-content: space-between;

    .MuiSvgIcon-root {
      font-size: 1.8rem;
      color: #ccc;
    }
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  width: 100%;
  height: 30%;
  background-color: #f0f;

  img {
    align-self: center;
  }
`;
export const CopyrightContainer = styled.div``;
