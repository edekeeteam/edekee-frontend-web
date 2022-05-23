import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Interest.module.scss";

import useLocalStorage from "../../hooks/useLocalStorage";

import Button from "../../components/Button/Button";
import InputInterest from "../../components/InputFields/InputInterest/InputInterest";

function Interest() {
  const navigate = useNavigate();
  // from the server
  const [interests, setInterests] = useState([]);
  // from the server

  // from the user
  const [checkedInterestsState, setCheckedInterestsState] = useState([]);
  // from the user

  // from localStorage
  const [interestState, setInterestState] = useLocalStorage("interests", []);
  // from localStorage

  useEffect(() => {
    axios.get("https://eked.herokuapp.com/v1/api/interests").then(async (response) => {
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
