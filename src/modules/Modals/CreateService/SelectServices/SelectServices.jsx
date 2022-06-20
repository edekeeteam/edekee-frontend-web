/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";
import apiMethods from "../../../../utils/apiMethods";
import styles from "./SelectServices.module.scss";
import endPoint from "../../../../routes";
import InputService from "../../../../components/InputFields/InputService/InputService";
import { useCreateServiceContext } from "../../../../context/CreateServiceContext";

function SelectServices({ nextStep, prevStep }) {
  const [serviceTypes, setServiceTypes] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const { selectedServiceTypes, setSelectedServiceTypes } = useCreateServiceContext();

  const getServiceTypes = () => apiMethods.get(`${endPoint.getServiceTypes}`);

  useEffect(() => {
    getServiceTypes().then(async (response) => {
      //  setLoading(false);
      console.log(response.data.data);
      setServiceTypes(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(selectedServiceTypes);
  }, [selectedServiceTypes]);

  // useEffect(() => {
  //   console.log(selectedServiceTypes);
  // });

  const handleOnChange = (id) => {
    // eslint-disable-next-line no-unused-expressions
    selectedServiceTypes.includes(id)
      ? // eslint-disable-next-line no-shadow
        setSelectedServiceTypes(selectedServiceTypes.filter((state) => state !== id))
      : // eslint-disable-next-line no-shadow
        setSelectedServiceTypes((selectedServiceTypes) => [...selectedServiceTypes, id]);
  };

  return (
    <div className={styles.selectServices}>
      <ModalHeader
        prevStep={prevStep}
        // canCancel={false}
        // showNext={categoryId}
        nextStep={nextStep}
      />
      <ModalTitle title="Services" desc=" Select your services. Add all the services you offer." />

      <div className={styles.servicesSection}>
        {serviceTypes &&
          serviceTypes.map((service, index) => (
            <InputService
              key={service.id}
              icon={service.icon}
              id={service.id}
              name={service.name}
              checkedInterestsState={selectedServiceTypes}
              handleOnChange={() => handleOnChange(service.id)}
              index={index}
            />
          ))}

        {/* <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} /> */}
      </div>
    </div>
  );
}

export default SelectServices;
