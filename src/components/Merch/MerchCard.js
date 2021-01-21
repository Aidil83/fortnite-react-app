import styled from "styled-components/macro";

const Main = styled.div`
  max-width: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  margin: 2px 4px;
  & .imageWrapper {
    transform: skew(25rad);
    width: 85px;
    height: 92px;
    border: 2.5px #fff solid;
    border-radius: 5px;
    background: linear-gradient(to bottom, #868686, #fff);
    overflow: hidden;
    img {
      height: 100px;
      width: 100px;
      position: relative;
      right: 10px;
    }
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 0.78rem;
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MerchCard = ({ item, id }) => {
  // console.log(item);
  return (
    <Main>
      <div className="imageWrapper" key={id}>
        <img src={item.images.icon} alt={id} />
      </div>
      <span>{item.name}</span>
    </Main>
  );
};

export default MerchCard;
