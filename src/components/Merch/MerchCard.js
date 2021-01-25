import styled from "styled-components/macro";

const MerchCard = ({item, id, handleModal}) => {

  return (
    <Main onClick={() => handleModal(item.images)}>
      <div className="imageWrapper" key={id}>
        <CardNum>{id}</CardNum>
        <img src={item.images.icon} alt={id} />
      </div>
      <span>{item.name}</span>
    </Main>
  );
};

export const CardNum = styled.div`
position: absolute;
top: -3px;
left: -1px;
z-index: 999;
height: 18%;
max-width: 100%;
padding-right: 3px;
border-radius: 0 25% 50% 0;
background-color: rgba(255,255,255,.90);
text-align: start;
color: black;
font-size: .7rem;
font-weight: 900;
`;

const Main = styled.div`
  max-width: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  margin: 2px 4px;
  cursor: pointer;
  transition: 0.175s;
  & .imageWrapper {
    transition: 0.175s;
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
    margin-top: 2px;
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover .imageWrapper {
    /* max-height cuz I'm telling the container to not expand more than 80px in height.*/
    max-height: 80px;
    margin: 0;
    overflow: hidden;
    transition: 0.15s;
    transform: skew(25rad) scale(1.2);
    background: linear-gradient(to bottom, #ffae00, #fff);
  }
  &:hover span {
    position: relative;
    background-color: #fdfdfd;
    border-radius: 3px;
    padding: 3px;
  }

  &:hover ${CardNum}{
    height: 20%;
  color: black;
  background-color: rgba(255,255,255,.95);
  }

`;

export default MerchCard;