import countriesArr from "../../../data/countriesArr";
import NewModal from "../../NewModal/NewModal";
import styles from "../../Modal/Modal.module.scss";
import Button from "../../Button/Button";
import { useAuthContext } from "../../../context/AuthContext";

function PhoneContact() {
  // const [countryCode, setCountryCode] = useState("")
  // const [number, setNumber] = useState("");
  // const [activeCountry, setActiveCountry] = useState(countriesArr[0]);

  const {
    handleInputChange,
    // handleRegistration,
    authSuccessful,
    authLoading,
    country,
    phoneNumber,
    saveCountryAndNumber,
    // setAuthLoading,
    errors,
    btnState,
  } = useAuthContext();
  const CountryOptions = countriesArr.map((eachCountry) => (
    <option key={eachCountry.code} value={eachCountry.value}>
      {" "}
      {eachCountry.name}{" "}
    </option>
  ));

  // const handleCountryChange = (countryValue) => {
  //   setActiveCountry(countriesArr.filter((eachCountry) => eachCountry.value === countryValue)[0]);
  // };

  const phoneInputBlock = {
    paddingRight: 5,
    marginRight: -5,
  };

  return (
    <NewModal>
      <div style={{ padding: "30px" }}>
        <h2 className={styles.modalHeader}> Phone Number </h2>

        <div className={styles.modalBody}>
          <form>
            <div className={`${styles.formGroup}`}>
              <select
                className={`${styles.formInput} ${styles.width100} ${styles.inputContainer}`}
                style={{ paddingRight: "25px", paddingLeft: "20px" }}
                value={country}
                name="country"
                onChange={(e) => {
                  // handleCountryChange(e.target.value);
                  handleInputChange(e);
                }}
              >
                {CountryOptions}
              </select>
            </div>
            <div
              className={`${styles.formGroup} ${styles.mt1} ${styles.py1} ${styles.inputContainer}`}
              style={phoneInputBlock}
            >
              <input type="text" className={styles.formInput} value="+234" disabled />

              <input
                name="phoneNumber"
                type="number"
                className={`${styles.formInput} ${styles.formInputLong}`}
                placeholder=""
                // style={{flexGrow: 3}}
                value={phoneNumber}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            <div className={`${styles.formGroup} ${styles.textCenter} ${styles.py1}`}>
              <Button
                label="Next"
                size="large"
                bgcolor="white"
                loading={authLoading}
                successful={authSuccessful}
                btnState={btnState}
                handleClick={(e) => {
                  // console.log(country, phoneNumber);
                  // changeAuthModalValue();
                  // handleRegistration(e);
                  saveCountryAndNumber(e);
                  // setAuthLoading(!authLoading);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </NewModal>
  );
}

export default PhoneContact;
