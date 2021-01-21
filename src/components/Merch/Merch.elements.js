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
  background-color: #fffcac;
`;

export const MerchListContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  width: 100%;
`;

export const MerchListCard = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 5px 14px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  background-color: #ccc;
`;
