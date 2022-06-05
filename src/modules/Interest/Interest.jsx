import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import axios from "axios";

import styles from "./Interest.module.scss";

import useLocalStorage from "../../hooks/useLocalStorage";

import Button from "../../components/Button/Button";
import InputInterest from "../../components/InputFields/InputInterest/InputInterest";
import request from "../../utils/axiosInstance";

function Interest() {
  const navigate = useNavigate();
  // from the server
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  // from the server

  // from the user
  const [checkedInterestsState, setCheckedInterestsState] = useState([]);
  // from the user

  // from localStorage
  const [interestState, setInterestState] = useLocalStorage("interests", []);
  // from localStorage

  const getInterests = () => request({ url: "/interests" });
  useEffect(() => {
    getInterests().then(async (response) => {
      setLoading(false);
      setInterests(response.data.data);
    });
  }, []);

  const handleOnChange = (id) => {
    // eslint-disable-next-line no-unused-expressions
    checkedInterestsState.includes(id)
      ? // eslint-disable-next-line no-shadow
        setCheckedInterestsState(checkedInterestsState.filter((state) => state !== id))
      : // eslint-disable-next-line no-shadow
        setCheckedInterestsState((checkedInterestsState) => [...checkedInterestsState, id]);
  };

  const addInterests = () => {
    setInterestState(() => [...checkedInterestsState]);
    if (checkedInterestsState.length >= 3 || interestState.length) {
      setTimeout(() => navigate("/home"), 200);
    }
  };

  return (
    <div className={styles.Interest}>
      <div className={styles.header}>
        <p className="global-text-24 global-modal-sm-mb">Interests</p>
        <p className="global-text-12">Kindly select up to 3 interest you’d like to see.</p>
      </div>
      <div className={styles.interestsContainer}>
        {!loading &&
          [1, 2, 3, 4, 5].map((n) => (
            <Skeleton key={n} circle width={102} height={102} style={{ margin: "15px" }} />
          ))}
        {interests &&
          interests.map((interest, index) => (
            <InputInterest
              key={interest.id}
              image={interest.picture}
              id={interest.id}
              name={interest.name}
              checkedInterestsState={checkedInterestsState}
              handleOnChange={() => handleOnChange(interest.id)}
              index={index}
            />
          ))}
      </div>
      <Button size="Large" bgcolor="white" handleClick={addInterests} label={"Let's go"} />
    </div>
  );
}

export default Interest;
