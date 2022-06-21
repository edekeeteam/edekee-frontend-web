import { useAuthContext } from "../../../context/AuthContext";
import NewModal from "../../NewModal/NewModal";
// import ArrowBackIcon from '../ArrowBackIcon'
import styles from "../../Modal/Modal.module.scss";
import Button from "../../Button/Button";

function RegUsernameModal() {
  // const [username, setUsername] = useState("");
  const {
    authLoading,
    authSuccessful,
    btnState,
    handleInputChange,
    username,
    errors,
    checkUsername,
  } = useAuthContext();

  return (
    <NewModal>
      <div className={styles.modalCenter} style={{ padding: "30px 40px" }}>
        {/* <ArrowBackIcon/> */}
        <h2 className={`${styles.modalHeader} global-modal-mb `}>Almost Done</h2>
        <p className="global-modal-sm-mb">
          Input your username. Your username will be visible to all.
        </p>
        <div className="modalBody">
          <form>
            <div className={`${styles.formGroup} global-modal-mb`}>
              <input
                type="text"
                name="username"
                onChange={(e) => handleInputChange(e)}
                value={username}
                placeholder="Username"
                className={`${styles.width100} ${styles.formInput}`}
              />
            </div>
            {errors.username && <p>{errors.username}</p>}
            <div className={`${styles.textCenter} ${styles.formGroup} ${styles.py1}`}>
              <div className="global-modal-mb">
                <Button
                  label="Done"
                  size="large"
                  bgcolor="white"
                  loading={authLoading}
                  successful={authSuccessful}
                  btnState={btnState}
                  handleClick={(e) => {
                    // changeAuthModalValue();
                    checkUsername(e);
                    // setAuthLoading(!authLoading);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </NewModal>
  );
}

export default RegUsernameModal;
