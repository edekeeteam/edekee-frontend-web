import React, { useContext, useState } from "react";
import axios from "axios";
import { useModalContext } from "./ModalContext";
/* eslint-disable react/jsx-no-constructed-context-values */
const UploadProductsContext = React.createContext();

// eslint-disable-next-line react/prop-types
function UploadProductsProvider({ children }) {
  // data
  const [pictureFiles, setPicturesFiles] = useState([]);
  const [source, setSource] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  // data

  // use in switching steps
  // const [step, setStep] = useState('selectImages')
  // use in switching steps

  const { setIsModalOpen } = useModalContext();

  const [percentage, setPercentage] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const uploadProducts = "https://eked.herokuapp.com/v1/api/product/upload";

  const handleProductsUpload = async () => {
    setShowProgress(true);
    let percent = 0;
    // eslint-disable-next-line prefer-const
    let formData = new FormData();

    formData.append("categoryId", categoryId);
    source.map((pic) => formData.append("products", pic));

    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`); // just to see whats happening in the console
        if (percent <= 100) {
          setPercentage(percent); // hook to set the value of current level that needs to be passed to the progressbar
        }
      },
    };

    try {
      // eslint-disable-next-line no-console
      console.log(formData);
      axios
        .create({
          headers: {
            "Content-Type": "multipart/form-data",
            mode: "no-cors",
          },
        })
        .post(uploadProducts, formData, config)
        .then((response) => {
          console.log(response);

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

  return (
    <UploadProductsContext.Provider
      //* eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        pictureFiles,
        setPicturesFiles,
        categoryId,
        setCategoryId,
        subCategoryId,
        setSubCategoryId,
        source,
        setSource,
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

// make sure use
export const useUploadProductsContext = () => useContext(UploadProductsContext);

export { UploadProductsContext, UploadProductsProvider };
