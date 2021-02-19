import styled from "styled-components/macro";

const media = {
  phone320: "@media only screen and (min-width: 320px)",
  phone375: "@media only screen and (min-width: 375px)",
  ipad768: "@media only screen and (min-width: 768px)",
  desktop1025: "@media only screen and (min-width: 1025px)",
  tv1200: "@media only screen and (min-width: 1200px)",
};

export const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(585px - 10vh);
  width: 100%;
  background-color: #2a2a2a;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    height: 50vh;
  }
  @media screen and (min-width: 1300px) {
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  width: 90%;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  ul {
    width: 170px;
    display: flex;
    justify-content: space-between;
    .MuiSvgIcon-root {
      font-size: 1.8rem;
      color: #ccc;
    }
    .arrow {
      position: absolute;
      right: 50px;
      border: 1px solid #ccc;
      &:hover {
        color: #ff0;
        border: 1px solid #ff0;
      }
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-self: center;
  width: 100%;
  height: 30%;
  & .inner-link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    a {
      font-size: 0.9rem;
      text-decoration: none;
      line-height: 1.5;
      color: #ccc;
    }
  }
  img {
    align-self: center;
    object-fit: contain;
    flex: 0.5;
    padding-bottom: 2%;
  }
  ${media.phone320} {
    flex-flow: column-reverse;
  }
  ${media.ipad768} {
    justify-content: space-between;
    width: 100%;
    width: max(20%, 600px);
    padding-bottom: 2%;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  color: #ccc;
  p {
    width: 60%;
    max-width: 70%;
    height: 100%;
  }
`;

export const PlatFormContainer = styled.div`
  display: flex;
  width: max(40%, 380px);
  align-self: center;
  ul {
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: #ccc;
    .MuiSvgIcon-root {
      font-size: 2rem;
    }
  }
`;
