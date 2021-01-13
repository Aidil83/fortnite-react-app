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
export const BlogButton = styled.button``;
export const BlogLoadMore = styled.p``;
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
