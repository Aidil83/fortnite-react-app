import { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { StateContext } from "../../context/StateProvider";
import { MerchData } from "../../data/MerchData";
import { merchCardLogic } from "./merchCardLogic";

const MerchCard = ({ item, id, handleModal }) => {
  const [bgCard, setBgCard] = useState("");
  const [, dispatch] = useContext(StateContext);

  useEffect(() => {
    merchCardLogic(item, MerchData, setBgCard);
  }, [bgCard]);

  const handleHoverCard = (item) => {
    dispatch({
      type: "HOVERCARD",
      hoverCard: item,
    });
    dispatch({
      type: "FIRSTCARD",
      firsCard: 1,
    });
  };

  return (
    <Main
      onClick={() => handleModal(item)}
      onMouseEnter={() => handleHoverCard(item)}
    >
      <span
        className="imageWrapper"
        key={id}
        style={{ background: `${bgCard}` }}
      >
        <CardNum>{id}</CardNum>
        <img src={item.images.smallIcon} alt={id} />
      </span>
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
  background-color: rgba(255, 255, 255, 0.9);
  text-align: start;
  color: black;
  font-size: 0.7rem;
  font-weight: 900;
  font-family: sans-serif;
`;

const Main = styled.div`
  max-width: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  margin: 2px 4px;
  cursor: pointer;
  transition: 0.175s;
  & .imageWrapper {
    position: relative;
    z-index: 1;
    transition: 0.175s;
    transform: skew(25rad);
    width: 85px;
    height: 92px;
    border: 2.5px #fff solid;
    border-radius: 5px;
    overflow: hidden !important;
    &:hover {
      background: linear-gradient(to bottom, #ffbb00, #000);
      overflow: hidden !important;
    }
    img {
      z-index: 0;
      height: 100px;
      width: 100px;
      position: relative;
      right: 10px;
    }
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 0.88rem;
    font-size: 0.78rem;
    margin-top: 2px;
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: sans-serif;
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

  &:hover ${CardNum} {
    height: 20%;
    color: black;
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

export default MerchCard;
