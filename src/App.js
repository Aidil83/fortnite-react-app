import { Blog, Navbar, Sidebar, Wrapper } from "./components";
import { AppContainer } from "./App.elements";
import GlobalStyle from "./globalStyles";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setCount(count + 1);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar isOpen={isOpen} count={count} handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} />
      <Wrapper />
      <AppOverlay isOpen={isOpen}></AppOverlay>
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
`;

export default App;
