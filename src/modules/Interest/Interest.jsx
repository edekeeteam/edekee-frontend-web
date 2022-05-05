import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Interest.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../../components/Button/Button";
import InputInterest from "../../components/inputFields/InputInterest/InputInterest";

function Interest() {
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  const [checkedInterestsState, setCheckedInterestsState] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [interestState, setInterestState] = useLocalStorage("interests", []);
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
    // console.log(checkedInterestsState);
    setInterestState(() => [...checkedInterestsState]);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className={styles.Interest}>
      <div className={styles.header}>
        <p className="global-text-24 global-modal-sm-mb">Interests</p>
        <p className="global-text-12">Kindly select up to 3 interest you’d like to see.</p>
      </div>
      <div className={styles.interestsContainer}>
        {interests &&
          interests.map((interest) => (
            <InputInterest
              key={interest.id}
              image={interest.picture}
              id={interest.id}
              name={interest.name}
              checkedInterestsState={checkedInterestsState}
              handleOnChange={() => handleOnChange(interest.id)}
            />
          ))}
      </div>
      <Button size="Large" bgcolor="white" handleClick={addInterests} label={"Let's go"} />
    </div>
  );
}

export default Interest;
