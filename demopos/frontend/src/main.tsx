import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/store.ts";
import InjectTailwind from "./InjectTailwind";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Hoc -> Higher Order Component */}
    <Provider store={store}>
      <BrowserRouter>
        <InjectTailwind>
          <App />
        </InjectTailwind>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
