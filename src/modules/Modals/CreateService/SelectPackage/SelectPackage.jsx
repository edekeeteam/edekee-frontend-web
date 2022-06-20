/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./SelectPackage.module.scss";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";
import { InputText } from "../../../../components/InputFields";
import Button from "../../../../components/Button/Button";
import PackageCard from "../../../../components/PackageCard/PackageCard";
// import { useCreateShopContext } from "../../../../context/CreateShopContext";
import { useCreateServiceContext } from "../../../../context/CreateServiceContext";

function SelectPackage({ nextStep, prevStep }) {
  // const [addedPackages, setAddedPackages] = useState([]);
  const { servicePackages, setServicePackages, createService, completed } =
    useCreateServiceContext();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "Benefits") {
      setDescription(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === "Price") {
      setPrice(e.target.value);
      console.log(e.target.value);
    }
  };

  const addPackage = () => {
    setServicePackages([...servicePackages, { name: "Exquisite", description, price }]);
    setDescription("");
    setPrice("");
  };

  const deletePackage = (id) => {
    const updatedPackages = servicePackages.filter((eachPackage, index) => index !== id);

    setServicePackages(updatedPackages);
  };

  const handleCreateService = () => {
    // nextStep();
    createService();
  };
  if (completed) {
    nextStep();
    console.log("completed");
  }

  return (
    <div className={styles.selectPackage}>
      <ModalHeader prevStep={prevStep} nextStep={() => handleCreateService} />
      <ModalTitle title="Packages/Plans" desc=" Add your packages/plans and prices." />
      <div className={styles.formSection}>
        <select className={`${styles.selectInput} ${styles.fullWidth}`}>
          <option>
            <p>Plan</p>
          </option>
        </select>

        <div className={styles.priceSection}>
          <select className={`${styles.selectInput} ${styles.smallWidth}`}>
            <option>
              <p>NGN</p>
            </option>
          </select>

          <InputText
            label="Price"
            name="Price"
            type="number"
            handleChange={(e) => {
              handleInputChange(e);
            }}
            value={price}
          />
        </div>
        <div>
          <InputText
            label="Benefits e.g AC, Free breakfast e.t.c."
            name="Benefits"
            type="text"
            handleChange={(e) => {
              handleInputChange(e);
            }}
            value={description}
          />
        </div>

        <div className={styles.buttonSection}>
          <Button
            label="+Add new Package"
            bgcolor="white"
            size="large"
            handleClick={() => {
              if (price === "" || description === "") {
                alert("add price and benefits");
              } else {
                addPackage();
              }
            }}
          />
        </div>

        <div className={styles.packageCardSection}>
          {servicePackages.length !== 0 &&
            servicePackages.map((eachPackage, index) => (
              <PackageCard
                benefits={eachPackage.description}
                price={eachPackage.price}
                key={eachPackage}
                index={index}
                onDelete={(id) => {
                  deletePackage(id);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SelectPackage;
