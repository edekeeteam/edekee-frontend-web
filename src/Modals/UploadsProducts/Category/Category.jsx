import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import styles from "./Category.module.scss";

import { InputCategory } from "../../../components/inputFields";
import { useUploadProductsContext } from "../../../context/UploadProducts";

function Category({ prevStep, nextStep }) {
  const [categories, setCategories] = useState([]);

  const { categoryId, setCategoryId } = useUploadProductsContext();

  useEffect(() => {
    axios
      .get("https://eked.herokuapp.com/v1/api/category")
      .then((response) => setCategories(response.data.data))
      .catch(() => {
        // console.log(error);
      });
  }, []);

  function handleCategoryInput(value, func) {
    setCategoryId(value);
    setTimeout(() => func(), 1000);
  }

  return (
    <div>
      <div className={styles.upload}>
        <div className={styles.Header}>
          <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
            <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          </div>
          {/* <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" /> */}
        </div>
        <div className={styles.Content}>
          <p className="global-text-24 global-modal-sm-mb">Select Category</p>
          <p className="global-text-12 global-modal-mb">
            Pick a category your product. For example, clothing items fall in The Apparel category
            and chairs in the furniture category.
          </p>
          <div className={styles.Categories}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

Category.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Category;
