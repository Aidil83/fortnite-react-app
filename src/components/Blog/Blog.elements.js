import styled from "styled-components/macro";

export const BlogMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-anchor: none;
`;

export const BlogContainer = styled.div`
  width: 95%;
  height: 100%;
  overflow-anchor: none;
`;

export const BlogButtonContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BlogButton = styled.button`
  border: 4px solid #000;
  background-color: #fff;
  padding: 0em 1.6em;
  transition: 0.3s ease-in-out;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;

  &:hover {
    transform: skewX(-4deg);
    transition: 0.3s ease-in-out;
    background-color: #000;
    border: 4px solid #000;
    color: #fff;
    -webkit-backface-visibility: hidden;
  }
`;
export const BlogLoadMore = styled.p`
  font-family: "Luckiest Guy", Roboto;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 2;
  cursor: pointer;
`;
export const BlogImageContainer = styled.div`
  position: relative;
  min-width: 100%;
  max-height: 100%;
  background-size: cover;
  background-position: top;
  margin-bottom: -5px;

  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    background-position: top;
  }
`;
