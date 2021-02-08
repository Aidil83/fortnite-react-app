import styled, { css } from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";

const fs = css`
  font-family: "Roboto", sans-serif;
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 51px;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    min-height: 80vh;
  }
  @media screen and (min-width: 1200px) {
    min-height: 90vh;
  }
`;
export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: wrap;
  background-color: #fff;
  margin: 20px auto;
  margin-bottom: 70px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  h1 {
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 600;
    font-size: clamp(1.75rem, 5vw, 2rem);
    line-height: 59px;
    letter-spacing: 0.05em;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const CartProduct__container = styled.div`
  height: 100%;
  @media (min-width: 1020px) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 600px;
    width: 105%;
  }
`;

export const Info = styled.div`
  height: 80px;
  width: 100%;
  max-width: 500px;
`;

export const Info__title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 2px;
  margin-bottom: 0.5em;
  & .product-label {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    @media screen and (max-width: 700px) {
      margin-left: 8px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 130px;
      left: 4%;
      border: 1px solid #aaa;
      opacity: 0.8;
      width: 93%;
    }
  }
  & .price-label {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-left: auto;
    margin-right: 10%;
  }
`;

export const Info__productContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85%;
  & .price-cost {
    font-size: clamp(1.2rem, 3vw, 1.3rem);
    margin-left: auto;
    margin-right: 8.5%;
    min-width: 2.5em;
    @media screen and (min-width: 768px) {
      margin-right: 9.75%;
    }
    @media screen and (min-width: 968px) {
      margin-right: 10%;
      min-width: 2.5em;
    }
  }
`;

export const Info__product = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & .product-image {
    width: 60px;
    height: 60px;
    background-image: radial-gradient(white, #ccc);
    margin-left: 13px;
    border-radius: 4px;
  }
`;
export const Info__name = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1.4em;
  margin-right: 10px;
  padding-left: 20px;
  & .product-name {
    font-size: clamp(0.85rem, 3vw, 1.3rem);
    ${fs}
    font-weight: 700;
  }
  & .product-rarity {
    font-size: clamp(0.75rem, 3vw, 1rem);
    font-family: "Montserrat", sans-serif;
  }
`;

export const Total = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 280px;
  background: #fafafa;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  padding: 1.1em;
  border-radius: 2%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  @media (min-width: 1000px) {
    margin-top: 50px;
  }
`;
export const Total__header = styled.div`
  height: 5vh;
  max-height: 38px;
  display: flex;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  ${fs};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const Total__subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.55em 0;
  padding-top: 0.75em;
  ${fs};
  font-size: clamp(1rem, 3vw, 1.2rem);
`;

export const Total__shipping = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.55em 0;
  ${fs};
  font-size: clamp(1rem, 3vw, 1.2rem);
`;
export const Total__total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.55em 0;
  text-transform: uppercase;
  ${fs};
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 700;
`;
export const Total__btn = styled.div`
  display: flex;
  justify-content: center;
  & .checkoutBtn {
    border: none;
    padding: 0.6em 1.5em 0.3em 1.5em;
    margin: 1em;
    text-transform: uppercase;
    border-radius: 3px;
    ${fs};
    font-weight: 900;
    font-size: clamp(0.8rem, 1.3vw, 1.1rem);
    line-height: 28px;
    letter-spacing: 0.05em;
    background-color: #1d0070;
    color: #fff;
  }
`;

export const Info__close = styled(CloseIcon)`
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
