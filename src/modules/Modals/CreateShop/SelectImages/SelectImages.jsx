import PropTypes from "prop-types";
import { useLayoutEffect } from "react";
import styles from "../../UploadsProducts/SelectImages/SelectImages.module.scss";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";
import { useCreateShopContext } from "../../../../context/CreateShopContext";

function SelectImages({ nextStep }) {
  const { clearValues } = useCreateShopContext();
  useLayoutEffect(() => {
    clearValues();
  }, []);
  return (
    <div className={styles.Input}>
      <div className={styles.upload}>
        <ModalTitle
          title="Build your shop"
          desc=" Create your shop and receive orders from videos across the web."
        />

        <button className="global-upload-btn global-text-12" onClick={nextStep()} type="button">
          Lets go
        </button>
      </div>
    </div>
  );
}

SelectImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectImages;
