import styled from "styled-components/macro";

export const BlogMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.2); */
  overflow-anchor: none;
`;

export const BlogContainer = styled.div`
  width: 95%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.2); */
  overflow-anchor: none;
`;

export const BlogButtonContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BlogButton = styled.button``;
export const BlogLoadMore = styled.p``;
export const BlogImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 1100px;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;
