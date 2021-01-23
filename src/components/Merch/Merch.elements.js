import styled from "styled-components/macro";

export const MerchMain = styled.div`
  position: relative;
  top: 51px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const MerchTab = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 70px;
    border-radius: 18px 18px 0 0;
    background-color: #393939;
    color: #cdc4c4;
  }
`;

export const MerchHeroContainer = styled.div`
  min-height: 40vh;
  width: 100%;
  background-image: linear-gradient(to right, #fffcac, #82e6e8);
`;

export const MerchListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(to right, #f1b1b1, #82e6e8);
  & .buttonContainer {
    width: 70%;
    display: flex;
    justify-content: space-around;
    button {
      padding: 10px 10px;
      border-radius: 50%;
      background-color: rgba(253, 253, 253, 0.6);
      border: solid 1px #fff;
      color: #505050;
      margin: 20px 0;
      cursor: pointer;
      transition: 0.1s;
      outline: none;
      &:hover {
        transition: 0.1s;
        background-color: rgba(155, 154, 154, 0.5);
        border: solid 1px #000;
      }
    }
  }
`;

export const MerchListCard = styled.div`
  height: 100%;
  min-height: 338px;
  max-height: 338px;
  max-width: 1200px;
  margin: 5px 14px;
  padding-top:5px; 
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (min-width: 1200px){
  overflow: hidden;
  }
`;
