import {
  Blog,
  Cart,
  Footer,
  Merch,
  Navbar,
  Sidebar,
  Wrapper,
  Checkout,
} from "./components";
import { AppContainer, RouteError, RouteErrorImage } from "./App.elements";
import GlobalStyle from "./globalStyles";
import { useState } from "react";
import styled from "styled-components/macro";
import { SliderData } from "./data/SliderData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import construction from "./images/construction/maintenance.jpg";

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
        <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
        <AppOverlay onClick={handleToggle} isOpen={isOpen}></AppOverlay>
        <Switch>
          <Route path="/" exact>
            <Wrapper slides={SliderData} />
            <Blog />
          </Route>
          <Route path="/merch" exact>
            <Merch />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          {/* NOTE: Catch any routes that don't match and display 404. */}
          <Route path="/">
            <RouteError img={construction}>
              <RouteErrorImage>
                <div className="container">
                  <div className="inner-container">
                    <h1>under development</h1>
                    <h4>
                      We’re making lots of improvements and will be back soon
                    </h4>
                  </div>
                </div>
              </RouteErrorImage>
            </RouteError>
          </Route>
        </Switch>
        <Footer />
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
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;

  @media screen and (min-width: 1190px) {
    display: none;
  }
`;

export default App;
