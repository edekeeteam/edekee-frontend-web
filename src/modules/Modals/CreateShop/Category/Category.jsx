// import React, { useEffect, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";

import { useState } from "react";
// import IndexStyle from "../index.module.scss";
import styles from "./Category.module.scss";
import apiMethods from "../../../../utils/apiMethods";
import endPoint from "../../../../routes";

// import { InputGender } from "../../../../components/InputFields";
// import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import { useCreateShopContext } from "../../../../context/CreateShopContext";
import { InputCategory } from "../../../../components/InputFields";

// eslint-disable-next-line no-unused-vars
function Category({ prevStep, nextStep }) {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState("");
  //
  // const { categoryId, setCategoryId } = useUploadProductsContext();
  //
  // eslint-disable-next-line no-unused-vars
  const getCategories = () => apiMethods.get(`${endPoint.getCategories}`);

  const { categoryArray, setCategoryId, categoryId } = useCreateShopContext();

  console.log(categoryArray);
  // console.log(getCategories);

  // const newCategories = categoryArray.filter((item) => item.name === "Fashion");

  // useEffect(() => {
  //   getCategories().then(async (response) => {
  //     console.log(response.data.data);
  //     setCategories(response.data.data);
  //   });
  // }, []);

  function handleCategoryInput(value) {
    setCategoryId(value);
    console.log(value);
    // setTimeout(() => func(), 112000000);
  }

  return (
    <div>
      <div className={styles.category}>
        <ModalHeader
          prevStep={prevStep}
          canCancel={false}
          showNext={categoryId}
          nextStep={nextStep}
        />
        <div className={styles.Content}>
          <p className="global-text-24 global-modal-sm-mb">Select Category</p>
          <p className="global-text-12 global-modal-mb">
            Pick a category your product. For example, men or women clothing or accessories like
            watches and necklaces.
          </p>
          {/* <div className="global-modal-mb">
            <InputSearch
              value={filter}
              handleChange={(e) => setFilter(e.target.value.toLowerCase())}
              name="search"
            />
          </div> */}
          <div className={styles.container}>
            {categories && (
              <InputCategory
                filterBy={filter}
                categories={categoryArray}
                onChange={(e) => {
                  handleCategoryInput(e);
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
