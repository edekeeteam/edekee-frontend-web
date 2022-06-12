// import React, { useEffect, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import IndexStyle from "../index.module.scss";
import styles from "./Category.module.scss";
import apiMethods from "../../../../../utils/apiMethods";
import endPoint from "../../../../../routes";

import { InputCategory, InputSearch } from "../../../../../components/InputFields";
import { useUploadProductsContext } from "../../../../../context/UploadProducts";
import ModalHeader from "../../../../../components/ModalHeader/ModalHeader";

// eslint-disable-next-line no-unused-vars
function Category({ prevStep, nextStep }) {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState("");
  //
  const { categoryId, setCategoryId } = useUploadProductsContext();
  //
  // eslint-disable-next-line no-unused-vars
  const getCategories = () => apiMethods.get(`${endPoint.getCategories}`);

  useEffect(() => {
    getCategories().then(async (response) => {
      console.log(response.data.data);
      setCategories(response.data.data);
    });
  }, []);

  function handleCategoryInput(value, func) {
    setCategoryId(value);
    setTimeout(() => func(), 200);
  }

  return (
    <div>
      <div className={`${IndexStyle.CategoryModal} ${styles.Category} `}>
        <ModalHeader
          prevStep={prevStep}
          canCancel={false}
          showNext={!!categoryId}
          nextStep={nextStep}
        />
        <div className={styles.Content}>
          <p className="global-text-24 global-modal-sm-mb">Select Category</p>
          <p className="global-text-12 global-modal-mb">
            Pick a category your product. For example, men or women clothing or accessories like
            watches and necklaces.
          </p>
          <div className="global-modal-mb">
            <InputSearch
              value={filter}
              handleChange={(e) => setFilter(e.target.value.toLowerCase())}
              name="search"
            />
          </div>
          <div className={styles.container}>
            {categories && (
              <InputCategory
                filterBy={filter}
                categoryId={categoryId}
                categories={categories}
                onChange={(e) => {
                  handleCategoryInput(e, nextStep());
                }}
              />
            )}
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
