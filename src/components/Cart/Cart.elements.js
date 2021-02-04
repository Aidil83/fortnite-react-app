import styled from "styled-components/macro";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /* background-color: #e9e9e9; */
`;
export const MainContainer = styled.div`
  height: 100vh;
  width: 90%;
  position: relative;
  top: 51px;
  background-color: #fff;

`;

export const Cart__line = styled.hr``;

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
`;

export const Info__header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: .25em;
  & .header-label {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(.85rem, 3vw, 2rem);
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.05em;
  }
  & .header-label:first-child { 
    flex: 1 1 60%; 
    text-align: start;
    padding-left: .7em;
  }
  & .header-label:nth-child(2) { 
    flex: 1 1 30%; 
    text-align: start;
  }
  & .edit-icon { 
    flex: 1 1 10%; 
    text-align: right;
    padding-right: .25em;
    cursor: pointer;
  }
`;
export const Info__content = styled.div`
  display: flex;
  justify-content: center;
  & .product-container {
    display: flex;
    flex: 1 1 60%;
    padding: 1em .75em;
    & .image-container {
      display: flex;
      justify-content: center;
      flex-basis: 25%;
      & .image-inner-container{
        background-color: #ccc;
        width: 50px;
        height: 50px;
        & .image-item {
          width: 50px;
          height: 50px;
        }
      }
    }
      & .name-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-basis: 75%;
        height: 100%;
        margin-right: .5em;
        & .name-inner-container {
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          & .product-name {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            line-height: 15px;
            text-align: center;
            letter-spacing: 0.05em;
            font-size: .95rem;
            text-align: start;
          }
          & .product-rarity {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: .75rem;
            line-height: 17px;
          }
        }
      }

  }
  & .product-price {
    display: flex;
    align-items: center;
    flex: 1 1 30%;
    padding-left: 1.3vw;
  }
  & .close-icon {
    flex: 1 1 10%;
  }
`;

export const Total = styled.div``;
export const Total__header = styled.div``;
export const Total__subtotal = styled.div``;
export const Total__shipping = styled.div``;
export const Total__total = styled.div``;
export const Total__btn = styled.div``;