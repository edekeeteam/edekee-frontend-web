import { createContext, useContext, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import apiMethods from "../utils/apiMethods";
import endPoint from "../routes";

// import { useModalContext } from "./ModalContext";

const UploadProductsContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
function UploadProductsProvider({ children }) {
  // data
  const [pictureFiles, setPicturesFiles] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [name, setName] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [desc, setDesc] = useState(undefined);
  const [brand, setBrand] = useState(undefined);
  const [currency, setCurrency] = useState(undefined);
  const [qty, setQty] = useState(undefined);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [weights, setWeights] = useState([]);
  // data

  // const { setIsModalOpen } = useModalContext();

  // uploadData
  const [percentage, setPercentage] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  // const uploadProducts = "https://eked.herokuapp.com/v1/api/product/upload";
  //  ;

  const handleProductsUpload = async () => {
    // console.log("here in context");
    setShowProgress(true);
    // let percent = 0;
    const formData = {
      name,
      brand,
      category: categoryId,
      subcategory: subCategoryId,
      description: desc,
      price: +price,
      quantity: +qty,
      currency,
      colors,
      sizes,
      weights,
    };
    const formDataVideo = new FormData();
    // formData.append("name", name);
    // formData.append("brand", brand);
    // formData.append("category", categoryId);
    // formData.append("subcategory", subCategoryId);
    // formData.append("description", desc);
    // formData.append("price", price);
    // formData.append("quantity", qty);
    // formData.append("currency", currency);
    // colors.map((color) => formData.append("colors", color));
    // sizes.map((size) => formData.append("sizes", size));
    // if (weights.length) {
    //   weights.map((weight) => formData.append("weight", weight));
    // }
    pictureFiles.map((pic) => formDataVideo.append("product_image", URL.createObjectURL(pic)));
    // formDataVideo.append("product_video", videoFile);

    // eslint-disable-next-line no-restricted-syntax
    // for (const pair of formData.entries()) {
    //   // eslint-disable-next-line no-console
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

    // eslint-disable-next-line no-unused-vars
    // const config = {
    //   onUploadProgress: (progressEvent) => {
    //     const { loaded, total } = progressEvent;
    //     percent = Math.floor((loaded * 100) / total);
    //     // eslint-disable-next-line no-console
    //     // console.log(`${loaded}kb of ${total}kb | ${percent}%`);
    //     // just to see whats happening in the console
    //     if (percent <= 100) {
    //       setPercentage(percent); // hook to set the value of current level that needs to be passed to the progressbar
    //     }
    //   },
    // };

    try {
      // eslint-disable-next-line no-console
      // console.log(formData);
      console.log("here");
      apiMethods
        .post(`${endPoint.uploadProducts}`, formData)
        .then((response) => {
          // setPercentage(percent);
          console.log(response);
          apiMethods
            .post(`${endPoint.uploadProductVideoImagesBy}${response.data.data.id}`, formDataVideo)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          // if (response.status === 201) {
          //   setPicturesFiles([]);
          //   // setSource(null);
          //   setIsModalOpen(false);
          //   setPercentage(0);
          //   setShowProgress(false);
          //   console.log(response);
          // }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error);
          }
          console.log(error);
        });
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const deleteImage = (selectedIndex) => {
    const newPictures = pictureFiles.filter((item, index) => index !== selectedIndex);
    setPicturesFiles(newPictures);
  };

  const addImage = ({ target }) => {
    // console.log(target.files[0])
    setPicturesFiles([...pictureFiles, target.files[0]]);
  };

  const deleteVideo = () => {
    // eslint-disable-next-line no-alert
    setVideoFile(null);
  };

  const clearValues = () => {
    // setPicturesFiles(null)
    // setVideoFile(null)
    // setCategoryId("")
    // setSubCategoryId("")
    // setName(undefined)
    // setPrice(undefined)
    // setDesc(undefined)
    // setCurrency(undefined)
    // setQty(undefined)
    // setColors([])
    // setSizes([])
    // setWeights([])
    console.log("");
  };

  // uploadData
  return (
    <UploadProductsContext.Provider
      //* eslint-disable-next-line react/jsx-no-constructed-context-values
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        pictureFiles,
        setPicturesFiles,
        videoFile,
        setVideoFile,
        categoryId,
        setCategoryId,
        subCategoryId,
        setSubCategoryId,
        name,
        setName,
        price,
        setPrice,
        desc,
        setDesc,
        brand,
        setBrand,
        qty,
        setQty,
        sizes,
        setSizes,
        percentage,
        setPercentage,
        showProgress,
        setShowProgress,
        colors,
        setColors,
        weights,
        setWeights,
        currency,
        setCurrency,
        handleProductsUpload,
        deleteVideo,
        deleteImage,
        addImage,
        clearValues,
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
