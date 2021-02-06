import styled, {css} from "styled-components/macro";

const fs = css`
  font-family: "Roboto", sans-serif;
`

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  top: 51px;
  overflow: hidden;
`;
export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 50px auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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

export const Info = styled.div`
  height: 115px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Info__product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & .product-label {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    &::after {
      content: '';
      position: absolute;
      top: 160px;
      left: 4%;
      border: 1px solid #ccc;
      opacity: .4;
      width: 93%;
    }
  }
  & .product-image {
    width: 70px;
    height: 70px;
    background-color: #ccc;
  }
`;
export const Info__name = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1.4em;
  & .product-name {
    font-size: clamp(.85rem, 3vw, 1.3rem);
    ${fs}
    font-weight: 700;
  }
  & .product-rarity {
    font-size: clamp(.75rem, 3vw, 1rem);
    font-family: "Montserrat", sans-serif;
  }
`;

export const Info__price = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & .price-label {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }
  & .price-cost {
    font-size: clamp(1.2rem, 3vw, 1.3rem);
    padding-bottom: 1.45em;
  }
`;

export const Info__edit = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1.65em;
  & .close-icon {
    color: #ccc;
  }
`;

export const Total = styled.div`
  width: 100%;
  background: #FAFAFA;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  padding: 1.1em;
  border-radius: 10%;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    position: static;
    min-width: 300px;
    max-width: 400px;
    border-radius: 20px;
    margin-left: 20px;
  }
`;
export const Total__header = styled.div`
  height: 5vh;
  display: flex;
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 700;
  ${fs};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const Total__subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .55em 0;
  padding-top: .75em;
  ${fs};
  font-size: clamp(1rem, 3vw, 1.2rem);
`;

export const Total__shipping = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .55em 0;
  ${fs};
  font-size: clamp(1rem, 3vw, 1.2rem);
`;
export const Total__total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .55em 0;
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
    padding: .6em 1.5em .3em 1.5em;
    font-size: clamp(1rem, 3vw, 1.2rem);
    text-transform: uppercase;
    ${fs};
    font-weight: 900;
    font-size: clamp(.80rem, 2vw, 1.2rem);
    line-height: 28px;
    letter-spacing: 0.05em;
    background-color: #1D0070;
    color: #fff;
  }
`;