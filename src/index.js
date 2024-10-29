import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// Redux
import { Provider } from "react-redux";
import store from "./redux/rootReducer";

//Hooks UseContext+UseReducer
// import { StoreProvider } from './Hooks/UseContext+UseReducer/Store'
// import { AppProvider } from "./Hooks/UseContext+UseReducer/ContextAPI/Context/AppContext";



// Set up axios base URL
axios.defaults.baseURL = "http://localhost:9999";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
