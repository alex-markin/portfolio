// libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// styles & components
import "./index.css";
import App from "./components/app/App";

// states & store
import { Provider } from 'react-redux'
import { store } from './services/store/store'


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

