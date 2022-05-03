/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const ModalContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalValue, setModalValue] = useState("");
  const [authModalValue, setAuthModalValue] = useState(0);
  const [uploadModalValue, setUploadModalValue] = useState(0);
  const [url, setUrl] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        modalValue,
        setModalValue,
        authModalValue,
        setAuthModalValue,
        uploadModalValue,
        setUploadModalValue,
        url,
        setUrl,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
// make sure use
export const useModalContext = () => useContext(ModalContext);

export { ModalContext, ModalProvider };
