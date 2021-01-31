import {Blog, Checkout, Footer, Merch, Navbar, Sidebar, Wrapper} from "./components";
import {AppContainer, RouteError} from "./App.elements";
import GlobalStyle from "./globalStyles";
import {useState} from "react";
import styled from "styled-components/macro";
import {SliderData} from "./data/SliderData";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
        <Navbar isOpen={isOpen} count={count} handleToggle={handleToggle} />
        <Sidebar isOpen={isOpen} />
        <AppOverlay onClick={handleToggle} isOpen={isOpen}></AppOverlay>
        <Switch>
          <Route path="/" exact>
            <Wrapper slides={SliderData} />
            <Blog />
          </Route>
          <Route path="/merch" exact>
            <Merch />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          {/* NOTE: Catch any routes that don't match and display 404. */}
          <Route path="/">
            <RouteError>
              <h1>404</h1>
            </RouteError>
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </Router>
  );
}

const AppOverlay = styled.div`
  display: ${({isOpen}) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;

  @media screen and (min-width: 1190px) {
    display: none;
  }
`;

export default App;
