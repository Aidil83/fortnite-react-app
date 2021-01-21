import styled from "styled-components/macro";

const Main = styled.div`
  max-width: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  margin: 2px 4px;
  & .imageWrapper {
    transform: skew(25rad);
    img {
      height: 84px;
      background-color: #343a57;
      width: 84px;
      border: 2px #fff solid;
      /* border: 2px #ffd900 solid; */
      border-radius: 5px;
    }
  }
  span {
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
  }
`;

const MerchCard = ({image, id}) => {
  console.log(image);
  return (
    <Main>
      <span className="imageWrapper" key={id}>
        <img src={image} alt={id} />
      </span>
      <span>name</span>
    </Main>
  );
};

export default MerchCard;
