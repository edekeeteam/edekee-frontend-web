import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Popup from "../components/Popup/Popup";

const PopupContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState(null);

  function togglePopup() {
    setOpen(!open);
  }

  const handleAction = (setIsModalOpen) => {
    setAction(() => setIsModalOpen);
  };

  function runAction() {
    action();
  }

  // uploadData
  return (
    <PopupContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        togglePopup,
        handleAction,
      }}
    >
      {children}

      {createPortal(
        <Popup open={open} action={() => runAction()} setOpen={() => togglePopup()} />,
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
