import PropTypes from "prop-types";
import { useState } from "react";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

import { shoeSize, unit } from "../../../../data/unit";

import globalUploadStyles from "../index.module.scss";
import styles from "./Measurements.module.scss";
import { InputSelect, InputText } from "../../../../components/InputFields";
import AddNew from "../../../../components/AddNewButton/AddNew";
import ValueCancelable from "../../../../components/ValueCancelable/ValueCancelable";
import { useUploadProductsContext } from "../../../../context/UploadProducts";
// import useGetProfile from "../../../../hooks/profile/useGetProfile";
import { useToastContext } from "../../../../context/ToastContext";

// eslint-disable-next-line no-unused-vars
function Measurements({ prevStep, nextStep }) {
  const toast = useToastContext();
  // const { data } = useGetProfile(localStorage.getItem("userId"));
  const [size, setSize] = useState("");
  const [shoeSizeUnit, setShoeSizeUnit] = useState("");

  const [selectedClothingSizes, addToSelectedClothingSizes] = useState([]);
  const [sizeClothing, setClothingSize] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("");

  const { handleProductsUpload, sizes, setSizes, weights, setWeights } = useUploadProductsContext();

  function Add(value, array, setArray) {
    const add = [...new Set([...array, value])];
    setArray(add);
  }

  function Delete(value, array, setArray) {
    const del = array.filter((val) => val !== value);
    setArray(del);
  }

  // weight
  const handleOnWeightAdd = () => {
    if (weight !== "") {
      if (weightUnit !== "") {
        Add(weight, weights, setWeights);
        setWeight("");
      } else {
        toast.open({ msg: "Select Weight Unit First", type: "warning" });
      }
    } else {
      toast.open({ msg: "Input Weight First", type: "warning" });
    }
  };

  const handleOnWeightDelete = (val) => {
    Delete(val, weights, setWeights);
  };
  // weight

  // shoe
  const handleOnSizeAdd = () => {
    if (size !== "") {
      if (shoeSizeUnit !== "") {
        Add(size, sizes, setSizes);
        setSize("");
      } else {
        toast.open({ msg: "Select Size Unit First", type: "warning" });
      }
    } else {
      toast.open({ msg: "Input Size First", type: "warning" });
    }
  };

  const handleOnSizeDelete = (val) => {
    Delete(val, sizes, setSizes);
  };
  // shoe
  // clothing
  const handleOnSizeClothingAdd = () => {
    if (sizeClothing !== "") {
      Add(sizeClothing, selectedClothingSizes, addToSelectedClothingSizes);
      setClothingSize("");
    }
  };

  const handleOnSizeClothingDelete = (val) => {
    Delete(val, selectedClothingSizes, addToSelectedClothingSizes);
  };

  // clothing

  function handleUpload() {
    handleProductsUpload();
  }

  return (
    <div className={`${globalUploadStyles.ProductUploadModal} ${styles.measurement}`}>
      <ModalHeader
        canCancel={false}
        showNext={false}
        canFinish={!!(sizes.length || selectedClothingSizes.length)}
        prevStep={prevStep}
        nextStep={() => handleUpload}
      />
      <div className={`${globalUploadStyles.Content}`}>
        {false && (
          <div className={styles.sizeSection}>
            <div className={`${styles.header} global-modal-mb`}>
              <p>Size</p>
              <AddNew text="Add New Size" handleAdd={handleOnSizeClothingAdd} />
            </div>
            <div className={`${styles.inputs} global-modal-sm-mb`}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="Select Size"
                options={unit.clothing}
                handleChange={(e) => {
                  setClothingSize(e);
                }}
              />
            </div>
            <div className={styles.selected}>
              {selectedClothingSizes &&
                selectedClothingSizes.map((s) => (
                  <ValueCancelable
                    onDelete={(val) => handleOnSizeClothingDelete(val)}
                    value={`${s}`}
                  />
                ))}
            </div>
          </div>
        )}

        <div className={styles.sizeSection}>
          <div className={`${styles.header} global-modal-mb`}>
            <p>Size</p>
            <AddNew text="Add New Size" handleAdd={handleOnSizeAdd} />
          </div>
          <div className={`${styles.inputs} global-modal-sm-mb`}>
            <div className={styles.weight}>
              {/* eslint-disable-next-line no-console */}
              <InputText
                name="Shoe"
                label="Input size"
                type="number"
                value={size}
                handleChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className={styles.unit}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="unit"
                options={shoeSize}
                handleChange={(e) => {
                  setShoeSizeUnit(e);
                }}
              />
            </div>
          </div>
          <div className={styles.selected}>
            {sizes &&
              sizes.map((s) => (
                <ValueCancelable
                  unit={shoeSizeUnit}
                  onDelete={(val) => handleOnSizeDelete(val)}
                  value={`${s}`}
                />
              ))}
          </div>
        </div>
        <div className={styles.weightSection}>
          <div className={`${styles.header} global-modal-mb`}>
            <p>
              Weight <span>(optional)</span>
            </p>
            <AddNew text="Add New Weight" handleAdd={handleOnWeightAdd} />
          </div>
          <div className={`${styles.inputs} global-modal-sm-mb`}>
            <div className={styles.weight}>
              {/* eslint-disable-next-line no-console */}
              <InputText
                name="weight"
                label="Input Weight"
                type="number"
                value={weight}
                handleChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className={styles.unit}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="unit"
                options={unit.weight}
                // value={currency}
                handleChange={(e) => {
                  setWeightUnit(e);
                }}
              />
            </div>
          </div>
          <div className={styles.selected}>
            {weights &&
              weights.map((w) => (
                <ValueCancelable
                  unit={weightUnit}
                  onDelete={(val) => handleOnWeightDelete(val)}
                  value={`${w}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Measurements.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Measurements;
