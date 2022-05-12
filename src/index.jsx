import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
// import {UploadProductsProvider} from "./context/UploadProducts";
import { DropdownProvider } from "./context/DropdownContext";
import reportWebVitals from "./reportWebVitals";
import { UploadProvider } from "./context/UploadContext";
import { BuyProvider } from "./context/BuyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <AuthProvider>
        <UploadProvider>
          <DropdownProvider>
            <BuyProvider>
              <App />
            </BuyProvider>
          </DropdownProvider>
        </UploadProvider>
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
