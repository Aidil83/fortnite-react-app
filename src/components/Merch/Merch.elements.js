import styled from "styled-components/macro";

export const MerchMain = styled.div`
  position: relative;
  top: 51px;
  min-height: 200vh;
  min-width: 100%;
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
  background-color: #fffcac;
`;

export const MerchListCard = styled.div`
  height: 100%;
  margin: 5px 30px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  background-color: #ccc;
`;
