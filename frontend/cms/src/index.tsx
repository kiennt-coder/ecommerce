import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./configs/store";
import reportWebVitals from "./reportWebVitals";

// Render application
function render() {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      {/* Provider store for application */}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

// Call render application function
render();

// Enable Hot Module Replacement
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
