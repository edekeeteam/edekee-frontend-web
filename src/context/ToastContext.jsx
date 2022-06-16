import { useContext, createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Toast from "../components/Toast/Toast";

function generateUEID() {
  // eslint-disable-next-line no-bitwise
  let first = (Math.random() * 46656) | 0;
  // eslint-disable-next-line no-bitwise
  let second = (Math.random() * 46656) | 0;
  first = `000${first.toString(36)}`.slice(-3);
  second = `000${second.toString(36)}`.slice(-3);

  return first + second;
}

const ToastContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const open = ({ msg, type }) =>
    setToasts((currentToasts) => [...currentToasts, { id: generateUEID(), msg, type }]);
  const close = (id) =>
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  const contextValue = useMemo(() => ({ open }), []);

  // uploadData
  return (
    <ToastContext.Provider
      //* eslint-disable-next-line react/jsx-no-constructed-context-values
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={contextValue}
    >
      {children}

      {createPortal(
        <div style={{ position: "fixed", top: "100px", right: "20px", zIndex: "1500" }}>
          {toasts.map((toast) => (
            <Toast type={toast.type} msg={toast.msg} key={toast.id} close={() => close(toast.id)} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

ToastProvider.propType = {
  children: PropTypes.node.isRequired,
};

export const useToastContext = () => useContext(ToastContext);

export { ToastContext, ToastProvider };
