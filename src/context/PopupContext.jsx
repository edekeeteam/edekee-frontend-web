import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Popup from "../components/Popup/Popup";

const PopupContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  function togglePopup(e) {
    setOpen(!open);
    console.log(e);
  }

  // uploadData
  return (
    <PopupContext.Provider
      //* eslint-disable-next-line react/jsx-no-constructed-context-values
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        togglePopup,
      }}
    >
      {children}

      {createPortal(
        <Popup open={open} setOpen={() => togglePopup()} />,
        // <div style={{ position: "fixed", top: "100px", right: "20px", zIndex: "1500" }}>
        //   {toasts.map((toast) => (
        //     <Toast type={toast.type} msg={toast.msg} key={toast.id} close={() => close(toast.id)} />
        //   ))}
        // </div>
        document.body
      )}
    </PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePopupContext = () => useContext(PopupContext);

export { PopupContext, PopupProvider };
