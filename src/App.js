import { Blog, Navbar, Wrapper } from "./components";
import { AppContainer } from "./App.elements";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Wrapper />
      <Blog />
    </AppContainer>
  );
}

export default App;
