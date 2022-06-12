import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import IndexStyle from "../index.module.scss";
import styles from "./DeliveryInfo.module.scss";
import { InputCheckbox } from "../../../../components/InputFields";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

// import { InputCategory } from "../../../../components/InputFields";
// import { useUploadProductsContext } from "../../../../context/UploadProducts";

function DeliveryInfo({ prevStep, nextStep }) {
  const [categories, setCategories] = useState([]);

  // const { categoryId, setCategoryId } = useUploadProductsContext();

  useEffect(() => {
    axios
      .get("https://eked.herokuapp.com/v1/api/category")
      .then((response) => setCategories(response.data.data))
      .catch(() => {
        // console.log(error);
        console.log(categories);
      });
  }, []);

  // function handleCategoryInput(value, func) {
  //   setCategoryId(value);
  //   setTimeout(() => func(), 1000);
  // }

  return (
    <div>
      <div className={`${IndexStyle.CategoryModal} ${styles.category} `}>
        {/* <div className={IndexStyle.Header}>
          <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
            <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          </div>
          <div onClick={nextStep()} onKeyDown={nextStep()} role="button" tabIndex={0}>
            <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
          </div>
        </div> */}
        <ModalHeader
          // showNext={pictureFiles.length === 4}
          // canCancel
          prevStep={prevStep}
          nextStep={nextStep}
        />
        <div
          className={styles.content}
          onClick={nextStep()}
          onKeyDown={nextStep()}
          role="button"
          tabIndex={0}
        >
          <p className="global-text-20 global-modal-sm-mb">Tell us where you Deliver.</p>
          <p className="global-text-10 global-modal-mb">
            Your Potential customers will see this information when view your shop.
          </p>

          {/* <div>
            {
              // eslint-disable-next-line no-console
              categories && (
                <InputCategory
                  categoryId={categoryId}
                  categories={categories}
                  onChange={(e) => {
                    handleCategoryInput(e, nextStep());
                  }}
                />
              )
            }
          </div> */}

          <div className={styles.deliveryInfoBody}>
            <div className={styles.deliveryOption}>
              <div>
                <InputCheckbox />
              </div>
              <p>I only sell and deliver within the country.</p>
            </div>
            <div className={styles.deliveryOption}>
              <div>
                <InputCheckbox />
              </div>

              <p>I only sell and deliver outside the country.</p>
            </div>
            <div className={styles.deliveryOption}>
              <div>
                <InputCheckbox />
              </div>
              <p>I sell and deliver both within and outside the country.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DeliveryInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default DeliveryInfo;
