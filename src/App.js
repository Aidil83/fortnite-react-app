import { Blog, Footer, Merch, Navbar, Sidebar, Wrapper } from "./components";
import { AppContainer, RouteError } from "./App.elements";
import GlobalStyle from "./globalStyles";
import { useState } from "react";
import styled from "styled-components/macro";
import { SliderData } from "./data/SliderData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setCount(count + 1);
  };

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Navbar isOpen={isOpen} count={count} handleToggle={handleToggle} />
            <Sidebar isOpen={isOpen} />
            <Wrapper slides={SliderData} />
            <AppOverlay onClick={handleToggle} isOpen={isOpen}></AppOverlay>
            <Blog />
            <Footer />
          </Route>
          <Route path="/merch" exact component={Merch} />
          {/* NOTE: Catch any routes that don't match and display 404. */}
          <Route path="/">
            <RouteError>
              <h1>404</h1>
            </RouteError>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
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
