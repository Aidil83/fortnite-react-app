import { Blog, Navbar, Sidebar, Wrapper } from "./components";
import { AppContainer } from "./App.elements";
import GlobalStyle from "./globalStyles";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar isOpen={isOpen} handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} />
      <Wrapper />
      <Blog />
    </AppContainer>
  );
}

export default App;
