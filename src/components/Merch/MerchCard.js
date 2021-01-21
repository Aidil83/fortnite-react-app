import styled from "styled-components/macro";

const Main = styled.div`
  max-width: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  margin: 2px 2px;
  & .imageWrapper {
    transform: skew(25rad);
    width: 85px;
    height: 92px;
    border: 2px #fff solid;
    border-radius: 5px;
    background: linear-gradient(to bottom, #868686, #fff);
    overflow: hidden;
    img {
      height: 125px;
      width: 130px;
      position: relative;
      right: 23px;
      bottom: 5px;
    }
  }
  span {
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
  }
`;

const MerchCard = ({ image, id }) => {
  console.log(image);
  return (
    <Main>
      <div className="imageWrapper" key={id}>
        <img src={image} alt={id} />
      </div>
      <span>name</span>
    </Main>
  );
};

export default MerchCard;
