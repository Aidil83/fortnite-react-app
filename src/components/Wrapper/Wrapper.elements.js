import styled from "styled-components";

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 51px;
  height: calc(100vh - 51px);
  width: 100%;
  z-index: 0;

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;
`;

export const WrapperText = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 85px;
  right: 0;
  margin: auto;

  width: 590px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 0;
  opacity: 0;
  background-image: url(${({ img }) => img});

  @media screen and (max-width: 620px) {
    width: 490px;
    height: 150px;
    left: 0;
  }
`;
export const WrapperButton = styled.button`
  position: absolute;
  bottom: 120px;
  background-color: #ff0;
  height: 48px;
  width: 230px;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: 500ms;

  &:hover {
    transform: skewX(-6deg);
  }
`;
export const WrapperLearnMore = styled.p`
  display: flex;
  flex-direction: center;
  align-items: center;
  color: black;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 0 34px;
  letter-spacing: 2.1px;
  transition: 500ms;

  &:hover {
    transform: translateX(2%);
    background-color: rgba(245, 245, 0);
    transform: skewX(-6deg);
  }
`;
