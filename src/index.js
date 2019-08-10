import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./components/theme";

import App from "./components/App";
import store from "./store";

const root = (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(root, rootElement);
