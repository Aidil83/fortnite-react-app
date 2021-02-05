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
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Info__product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  background-color: orange;
  & .product-label {
    font-size: 1rem;
  }
  img {
    width: 70px;
    height: 70px;
    background-color: #ccc;
  }
`;
export const Info__name = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: .65em;
  margin-right: auto;
  padding-left: 10px;
  background-color: violet;
`;
export const Info__price = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: .2em;
`;
export const Info__edit = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1em;
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