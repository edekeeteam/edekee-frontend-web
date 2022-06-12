import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import IndexStyle from "../index.module.scss";
import styles from "./SubCategory.module.scss";

import { InputCategory } from "../../../../../components/InputFields";
import { useUploadProductsContext } from "../../../../../context/UploadProducts";

// eslint-disable-next-line no-unused-vars
function SubCategory({ prevStep, nextStep }) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const { categoryId, setCategoryId, subCategoryId, setSubCategoryId } = useUploadProductsContext();

  // Category

  useEffect(() => {
    axios
      .get("https://eked.herokuapp.com/v1/api/category")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch(() => {
        // console.log(error);
      });
  }, []);

  function handleCategoryInput(value) {
    setCategoryId(value);
  }

  // Category

  function handleSubCategoryInput(value, func) {
    setSubCategoryId(value);
    setTimeout(() => func(), 1000);
  }

  function filterSubCategories(catArray) {
    // eslint-disable-next-line no-unused-expressions
    return catArray.find((category) => category.id === categoryId);
  }

  useEffect(() => {
    axios
      .get("https://eked.herokuapp.com/v1/api/category")
      .then((response) => {
        const { data } = response.data;
        setCategories(response.data.data);
        setSubCategories(filterSubCategories(data).subcategory);
      })
      .catch(() => {
        // console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <div className={`${IndexStyle.CategoryModal} ${styles.SubCategory} `}>
        <div className={IndexStyle.Header}>
          <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
            <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          </div>
          {/* <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" /> */}
        </div>
        <div className={styles.Content}>
          <p className="global-text-24 global-modal-sm-mb">Select a Subcategory</p>
          <p className="global-text-12 global-modal-mb">Pick a subcategory for your product.</p>
          <div>
            {
              // eslint-disable-next-line no-console
              categories && (
                <InputCategory
                  size="small"
                  categoryId={categoryId}
                  categories={categories}
                  onChange={(e) => {
                    handleCategoryInput(e);
                  }}
                />
              )
            }
            {subCategories && (
              <InputCategory
                size="large"
                categoryId={subCategoryId}
                categories={subCategories}
                onChange={(e) => {
                  handleSubCategoryInput(e, nextStep());
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SubCategory.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default SubCategory;
