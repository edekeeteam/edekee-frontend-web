import { useLayoutEffect } from "react";
import { useToastContext } from "../context/ToastContext";

const useToast = ({ msg, type }) => {
  const toast = useToastContext();
  useLayoutEffect(
    () => () => {
      toast.open({ msg, type });
    },
    []
  );
};

export default useToast;
