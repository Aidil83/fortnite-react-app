import styled from "styled-components/macro";
import HashLoader from 'react-spinners/HashLoader';


export const MerchMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  top: 51px;
  width: 100%;
  margin-bottom: 50px;
`;

export const MerchHeroContainer = styled.div`
  min-height: 32vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .innerContainer {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(270.03deg, rgba(102, 110, 139, 0) -3.51%, rgba(102, 110, 139, 0.1) -3.5%, rgba(79, 87, 117, 0.7) 31.67%, rgba(79, 87, 117, 0.7) 68.25%, rgba(102, 110, 139, 0.1) 100.33%); 
    img {
      height: 330px;
      background-position: top;
      padding-top: 10px;
      padding-left: 130px;
    }
    & .inner-description {
      width: 40%;
      height: 200px;
      padding-left: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #f0f0f0;
    }
  }
  @media screen and (max-width: 767px){
  overflow: hidden;
  display: none;
  }
`;

export const MerchListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  & .buttonContainer {
    width: 70%;
    display: flex;
    justify-content: space-around;
    button {
      padding: 10px 10px;
      border-radius: 50%;
      background-color: rgba(218, 218, 218, 0.6);
      border: solid 2px #fff;
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
  @media screen and (max-width: 767px){
  overflow: hidden;
  height: 70%;
  }
`;

export const MerchSpinner = styled(HashLoader)`
  height: 100%;
  min-height: 338px;
  max-height: 338px;
  width: 100%;
  max-width: 1200px;
  margin: 5px 14px;
  padding-top:5px; 
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  top: 140px;

  @media screen and (min-width: 1200px){
  overflow: hidden;
  }
  @media screen and (max-width: 767px){
  }
`

export const MerchListCard = styled.div`
  height: 100%;
  min-height: 338px;
  max-height: 338px;
  width: 100%;
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


export const MerchHidden = styled.div`
  display: none;
`;
