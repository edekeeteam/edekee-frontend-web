import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import { isMobile } from "react-device-detect";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
// import {UploadProductsProvider} from "./context/UploadProducts";
import { DropdownProvider } from "./context/DropdownContext";
import reportWebVitals from "./reportWebVitals";
import { UploadProvider } from "./context/UploadContext";
import { BuyProvider } from "./context/BuyContext";
import { ProductsProvider } from "./context/ProductsContext";
import { ToastProvider } from "./context/ToastContext";
import { PopupProvider } from "./context/PopupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

if (isMobile) {
  window.location.href = "https://play.google.com/store/apps/details?id=com.edekee.edekee";
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <PopupProvider>
          <ModalProvider>
            <AuthProvider>
              <UploadProvider>
                <DropdownProvider>
                  <ProductsProvider>
                    <BuyProvider>
                      <SkeletonTheme baseColor="#3F3F3F" highlightColor="#525252">
                        <App />
                      </SkeletonTheme>
                    </BuyProvider>
                  </ProductsProvider>
                </DropdownProvider>
              </UploadProvider>
            </AuthProvider>
          </ModalProvider>
        </PopupProvider>
      </ToastProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
