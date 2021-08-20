import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reducer, { initialState } from "./context/reducer";
import { StateProvider } from "./context/StateProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <App />
        </Router>
      </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
