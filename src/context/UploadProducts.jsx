import React, { useContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { useModalContext } from "./ModalContext";

const UploadProductsContext = React.createContext(undefined);

// eslint-disable-next-line react/prop-types
function UploadProductsProvider({ children }) {
  // data
  const [pictureFiles, setPicturesFiles] = useState(null);
  const [source, setSource] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [name, setName] = useState(undefined);
  const [slug, setSlug] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [desc, setDesc] = useState(undefined);
  const [brand, setBrand] = useState(undefined);
  // data

  const { setIsModalOpen } = useModalContext();

  // uploadData
  const [percentage, setPercentage] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const uploadProducts = "https://eked.herokuapp.com/v1/api/product/upload";

  const handleProductsUpload = async () => {
    // console.log("here in context");
    setShowProgress(true);
    let percent = 0;
    // eslint-disable-next-line prefer-const
    let formData = new FormData();

    formData.append("category", categoryId);
    formData.append("name", name);
    formData.append("slug", name);
    // pictureFiles.FileList.map((pic) => formData.append("products", pic));
    // formData.append("products", pictureFiles.map((pic) => pic))
    // eslint-disable-next-line no-restricted-syntax,no-console
    console.log(pictureFiles);

    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData.entries()) {
      // eslint-disable-next-line no-console
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        percent = Math.floor((loaded * 100) / total);
        // eslint-disable-next-line no-console
        // console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        // just to see whats happening in the console
        if (percent <= 100) {
          setPercentage(percent); // hook to set the value of current level that needs to be passed to the progressbar
        }
      },
    };

    try {
      // eslint-disable-next-line no-console
      // console.log(formData);
      axios
        .create({
          headers: {
            "Content-Type": "multipart/form-data",
            mode: "no-cors",
          },
        })
        .post(uploadProducts, formData, config)
        .then((response) => {
          // console.log(response);
          // console.log(response);
          setPercentage(percent);
          // (() => {
          // 	setTimeout(() => {
          // 		setPercentage(0);
          // 		setSource(null);
          // 	}, 1000);
          // })
          if (response.status === 201) {
            setPicturesFiles([]);
            setSource(null);
            setIsModalOpen(false);
            setPercentage(0);
            setShowProgress(false);
          }
        })
        .catch((error) => {
          if (error.response) {
            // console.log(error.response);
          }
          // console.log(error.message);
        });
    } catch (error) {
      // handle error
      // console.log(error);
    }
  };

  // uploadData
  return (
    <UploadProductsContext.Provider
      //* eslint-disable-next-line react/jsx-no-constructed-context-values
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        pictureFiles,
        setPicturesFiles,
        categoryId,
        setCategoryId,
        subCategoryId,
        setSubCategoryId,
        source,
        setSource,
        name,
        setName,
        slug,
        setSlug,
        price,
        setPrice,
        desc,
        setDesc,
        brand,
        setBrand,
        percentage,
        setPercentage,
        showProgress,
        setShowProgress,
        handleProductsUpload,
      }}
    >
      {children}
    </UploadProductsContext.Provider>
  );
}

UploadProductsProvider.propType = {
  children: PropTypes.node.isRequired,
};

export const useUploadProductsContext = () => useContext(UploadProductsContext);

export { UploadProductsContext, UploadProductsProvider };
