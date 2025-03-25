import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes/index";
import GlobalStyles from "./assets/styles/globalStyle";
import AppProvider from "./AppProvider";

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
