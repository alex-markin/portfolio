import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux'
// import { rootReducer } from './services/store/rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
