import styled from "styled-components/macro";
import blackWidow from "../../images/merch_image_icon/smallicon-blackWidow.png";

const Main = styled.div`
  max-width: 60px;
  display: flex;
  flex-direction: column;
  margin: 0 6px;
  & .imageWrapper {
    transform: skew(25rad);
    img {
      height: 62px;
      background-color: #898989;
      width: 69px;
      border: 2px #fff solid;
      border-radius: 5px;
    }
  }
  span {
    display: flex;
    justify-content: center;
  }
`;

const MerchCard = () => {
  return (
    <Main>
      <span className="imageWrapper">
        <img src={blackWidow} alt="blackWidow" />
      </span>
      <span>name</span>
    </Main>
  );
};

export default MerchCard;
