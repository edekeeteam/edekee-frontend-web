/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const ModalContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isVidModalOpen, setIsVidModalOpen] = useState(true);
  const [modalValue, setModalValue] = useState("");
  const [authModalValue, setAuthModalValue] = useState(1);
  const [uploadModalValue, setUploadModalValue] = useState(0);
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");

  // if (localStorage.getItem("user") !== null) {
  //   console.log(`Email address exists`);
  //   setAuthModalValue(1);
  // } else {
  //   console.log(`Email address not found`);
  // }

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
        isVidModalOpen,
        setIsVidModalOpen,
        label,
        setLabel,
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
