import styled from "styled-components/macro";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  top: 51px;
  overflow: hidden;
  /* background-color: #e9e9e9; */
`;
export const MainContainer = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 50px auto;
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
    font-family: "Roboto", sans-serif;
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
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    padding-bottom: 1.45em;
  }
`;

export const Info__edit = styled.div`
  height: 100%x;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1.65em;
  & .close-icon {
    color: #ccc;
  }
`;

export const Total = styled.div`
  display: none;
  width: 50%;
`;
export const Total__header = styled.div``;
export const Total__subtotal = styled.div``;
export const Total__shipping = styled.div``;
export const Total__total = styled.div``;
export const Total__btn = styled.div``;