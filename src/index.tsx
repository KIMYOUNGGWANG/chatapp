import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleweare from "redux-promise";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleweare,
  ReduxThunk
)(createStore);
ReactDOM.render(
  <BrowserRouter>
    <Provider
      store={createStoreWithMiddleware(
        rootReducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
