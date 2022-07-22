/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from "react";
import axios from "axios";

const CreateServiceContext = React.createContext();

// eslint-disable-next-line react/prop-types
function CreateServiceProvider({ children }) {
  const [pictureFiles, setPicturesFiles] = useState(null);
  const [source, setSource] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const user_id = localStorage.getItem("userId");
  const [servicePackages, setServicePackages] = useState([]);
  const [completed, setCompleted] = useState(false);

  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);

  // const [products, setProducts] = useState({});
  // const [productDetails, setProductDetails] = useState({});

  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(0);

  // const weight = "";

  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(0);

  const deleteImage = (selectedIndex) => {
    const newPictures = pictureFiles.filter((item, index) => index !== selectedIndex);
    setPicturesFiles(newPictures);
  };

  const addImage = ({ target }) => {
    // console.log(target.files[0])
    setPicturesFiles([...pictureFiles, target.files[0]]);
  };

  const clearValues = () => {
    setPicturesFiles(null);
    setSource(null);
    setCategoryId("");
    setEmail("");
    setPhone("");
    setStreetAddress("");
    setDescription("");
    setServicePackages([]);

    console.log(" call");
  };

  const createService = () => {
    const stringServiceTypes = selectedServiceTypes.map((service) => {
      console.log(service);
      return service.toString();
    });
    const params = {
      serviceDetails: {
        user_id,
        name: "Buju Hustle",
        category_id: categoryId,
        company_name: companyName,
        phone,
        email,
        address: streetAddress,
        description,
      },
      serviceTypes: stringServiceTypes,
      serviceAvailability: [
        {
          start_date: "12/02/2012",
          end_date: "2/02/2012",
          start_time: "08:00",
          end_time: "22:00",
        },
        {
          start_date: "12/02/2012",
          end_date: "2/02/2012",
          start_time: "08:00",
          end_time: "22:00",
        },
      ],
      servicePackages,
    };
    console.log(params);

    axios
      .post(
        "http://app.edekee.io:3000/v1/api/services/createService",
        params,

        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          setCompleted(true);
        }
        // console.log(typeof config);

        // setPercentage(percent);
        // () => {
        //   setTimeout(() => {
        //     setPercentage(0);
        //     setSource(null);
        //   }, 1000);
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CreateServiceContext.Provider
      value={{
        companyName,
        setCompanyName,
        email,
        setEmail,
        phone,
        setPhone,
        streetAddress,
        setStreetAddress,
        description,
        setDescription,
        categoryId,
        setCategoryId,
        pictureFiles,
        setPicturesFiles,
        source,
        setSource,
        addImage,
        deleteImage,
        selectedServiceTypes,
        setSelectedServiceTypes,
        servicePackages,
        setServicePackages,
        createService,
        completed,
        setCompleted,
        clearValues,
      }}
    >
      {children}
    </CreateServiceContext.Provider>
  );
}

// make sure use
export const useCreateServiceContext = () => useContext(CreateServiceContext);

export { CreateServiceContext, CreateServiceProvider };
