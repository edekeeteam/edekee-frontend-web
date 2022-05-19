import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
// import {UploadProductsProvider} from "./context/UploadProducts";
import { DropdownProvider } from "./context/DropdownContext";
import reportWebVitals from "./reportWebVitals";
import { UploadProvider } from "./context/UploadContext";
import { BuyProvider } from "./context/BuyContext";
import { ProductsProvider } from "./context/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>
          <UploadProvider>
            <DropdownProvider>
              <ProductsProvider>
                <BuyProvider>
                  <App />
                </BuyProvider>
              </ProductsProvider>
            </DropdownProvider>
          </UploadProvider>
        </AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
