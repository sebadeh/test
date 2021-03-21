import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/index";
import { Routes } from "./routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
