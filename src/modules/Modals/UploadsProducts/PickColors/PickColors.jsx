import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import globalUploadStyles from "../index.module.scss";
import styles from "./PickColors.module.scss";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";
import apiMethods from "../../../../utils/apiMethods";
import endPoint from "../../../../routes";
import {
  InputColor,
  InputColorPicker,
  // eslint-disable-next-line import/named
  InputColorPickerCancelable,
} from "../../../../components/InputFields";
import { useUploadProductsContext } from "../../../../context/UploadProducts";

function PickColors({ nextStep, prevStep }) {
  // eslint-disable-next-line no-unused-vars
  const [allColors, setAllColors] = useState([]);
  const { colors, setColors } = useUploadProductsContext();
  const getColors = () => apiMethods.get(`${endPoint.getColors}`);

  useEffect(() => {
    getColors().then(async (response) => {
      setAllColors(response.data.data);
    });
  }, []);

  function handleOnInput(e) {
    const newColors = [...new Set([...colors, e])];
    setColors(() => newColors);
  }

  function handleOnInputChange(e, co) {
    const newColors = colors.map((color) => (color === co ? e : color));
    setColors(() => [...newColors]);
  }

  function handleOnDelete(col) {
    const newColors = colors.filter((color) => color !== col);
    setColors(() => [...newColors]);
  }

  return (
    <div className={`${globalUploadStyles.ProductUploadModal} ${styles.pickColors}`}>
      <ModalHeader
        prevStep={prevStep}
        canCancel={false}
        // showNext={!!colors.length}
        showNext
        nextStep={nextStep}
      />
      <div className={`${globalUploadStyles.Content}`}>
        <ModalTitle
          title="Select colors"
          desc="How many colors of this product do you have? Click the “pick colors button” to pick colors."
        />
        <div className={`${styles.selectedColors} global-modal-mb`}>
          <div className={`${styles.container} ${!colors.length ? "" : styles.active}`}>
            <InputColorPicker onInputKeyUp={(e) => handleOnInput(e)} />
            {!colors.length && (
              <span className="global-text-12">Use color picker to pick colors</span>
            )}
          </div>
          {colors &&
            colors.map((color) => (
              <InputColorPickerCancelable
                color={color}
                onDelete={(col) => handleOnDelete(col)}
                onInputChange={(e, col) => handleOnInputChange(e, col)}
              />
            ))}
        </div>
        <div className="global-text-12 global-modal-mb">
          <p className="global-text-12 global-modal-sm-mb">OR</p>
          <p>Select colors manually</p>
        </div>
        <div className={styles.colors}>
          <InputColor
            Colors={allColors}
            handleChange={(e) => {
              handleOnInput(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

PickColors.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default PickColors;
