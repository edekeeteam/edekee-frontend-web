import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {useRouter} from "next/router";
import axios from "axios";
import styles from "./Interest.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../../components/Button/Button";
import InputInterest from "../../components/inputFields/InputInterest/InputInterest";

// const interests = [
//   {
//     id: 1,
//     name: "Weddings",
//     image: "./interests/wedding.png",
//   },
//   {
//     id: 2,
//     name: "Fashion",
//     image: "./interests/fashion.png",
//   },
//   {
//     id: 3,
//     name: "Travel",
//     image: "./interests/travel.png",
//   },
//   {
//     id: 4,
//     name: "Nature",
//     image: "./interests/nature.png",
//   },
//   {
//     id: 5,
//     name: "Home Decor",
//     image: "./interests/home_decor.png",
//   },
//   {
//     id: 6,
//     name: "Food",
//     image: "./interests/food.png",
//   },
//   {
//     id: 7,
//     name: "Lifestyle",
//     image: "./interests/lifestyle.png",
//   },
//   {
//     id: 8,
//     name: "Comedy",
//     image: "./interests/comedy.png",
//   },
//   {
//     id: 9,
//     name: "Music",
//     image: "./interests/music.png",
//   },
//   {
//     id: 10,
//     name: "Dance",
//     image: "./interests/dance.png",
//   },
// ];

function Interest() {
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  const [checkedInterestsState, setCheckedInterestsState] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [_, setInterestState] = useLocalStorage("interests", []);
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
    console.log(checkedInterestsState);
    setInterestState(() => [...checkedInterestsState]);
    navigate("/home", { replace: true });
  };

  return (
    <div className={styles.Interest}>
      <div className={styles.header}>
        <p>Interests</p>
        <p>Kindly select up to 3 interest you’d like to see.</p>
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
