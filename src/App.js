import { Blog, Navbar, Sidebar, Wrapper } from "./components";
import { AppContainer } from "./App.elements";
import GlobalStyle from "./globalStyles";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  let clickAnywhere = useRef(null);

  useEffect(() => {
    console.log(clickAnywhere);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setCount(count + 1);
  };

  return (
    <AppContainer ref={(e) => (clickAnywhere = e)}>
      <GlobalStyle />
      <Navbar
        isOpen={isOpen}
        count={count}
        handleToggle={handleToggle}
        clickAnyWhere={clickAnywhere}
      />
      <Sidebar isOpen={isOpen} />
      <Wrapper />
      <AppOverlay onClick={handleToggle} isOpen={isOpen}></AppOverlay>
      <Blog />
    </AppContainer>
  );
}

const AppOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;

  @media screen and (min-width: 1190px) {
    display: none;
  }
`;

export default App;
