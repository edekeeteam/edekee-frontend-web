/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";
// import sublinks from "./data";
import axios from "axios";
import { useModalContext } from "./ModalContext";

// import reducer from "../reducers/authReducer";

const UploadContext = React.createContext();

// eslint-disable-next-line react/prop-types
function UploadProvider({ children }) {
  const [videoFile, setVideoFile] = useState(null);
  const [source, setSource] = useState(null);

  const { setIsModalOpen } = useModalContext();

  const [percentage, setPercentage] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const getCategories = () => {
    axios
      .get("https://eked.herokuapp.com/v1/api/category/new")
      .then(async (response) => {
        console.log(response);
      })
      .catch(() => {
        // console.log(error);
      });
  };
  const handleVideoUpload = async () => {
    setShowProgress(true);
    let percent = 0;
    // eslint-disable-next-line prefer-const
    let formData = new FormData();

    // console.log(formData, "formData...");
    // console.log(videoFile);
    const categoryId = "67ca2ac1-0051-492b-bdc5-819dba5a69f1";
    formData.append("categoryId", categoryId);
    formData.append("videoFile", videoFile);
    // console.log(formData);

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
      axios
        .create({
          headers: {
            "Content-Type": "multipart/form-data",
            mode: "no-cors",
          },
        })
        .post("https://eked.herokuapp.com/v1/api/video/upload", formData, config)
        .then((response) => {
          console.log(response);

          setPercentage(percent);
          () => {
            setTimeout(() => {
              setPercentage(0);
              setSource(null);
            }, 1000);
          };
          if (response.status === 201) {
            setVideoFile(null);
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

      // fetch("https://eked.herokuapp.com/v1/api/video/upload", {
      //   body: formData,
      //   // headers: {
      //   //   // Accept: "application/json",
      //   //   "Content-Type": undefined,
      //   // },
      //   headers: formData.getHeaders,
      //   method: "post",
      // })
      //   .then((data) => {
      //     console.log(data);
      //     // file = "";
      //   })
      //   .catch((error) => {
      //     console.log("There was a problem", error);
      //   });
    } catch (error) {
      // handle error
      // console.log(error);
    }
  };

  // const values = useMemo(
  //   () => (),
  //   []
  // );

  return (
    <UploadContext.Provider
      value={{
        videoFile,
        setVideoFile,
        handleVideoUpload,
        getCategories,
        percentage,
        setPercentage,
        showProgress,
        setShowProgress,
        source,
        setSource,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
}
// make sure use
export const useUploadContext = () => useContext(UploadContext);

export { UploadContext, UploadProvider };
