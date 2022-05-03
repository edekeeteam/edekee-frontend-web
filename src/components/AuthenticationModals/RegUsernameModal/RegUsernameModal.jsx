import React, { useState } from "react";
import Modal from "../../Modal/Modal";
// import ArrowBackIcon from '../ArrowBackIcon'
import styles from "../../Modal/Modal.module.scss";

function RegUsernameModal() {
  const [username, setUsername] = useState("");
  return (
    <Modal>
      <div className={styles.modalCenter}>
        {/* <ArrowBackIcon/> */}
        <h2 className={styles.modalHeader}>Almost Done</h2>
        <p>Input your username. Your username will be visible to all.</p>
        <div className="modalBody">
          <form>
            <div className={styles.formGroup}>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
                className={`${styles.width100} ${styles.formInput}`}
              />
            </div>

            <div className={`${styles.textCenter} ${styles.formGroup} ${styles.py1}`}>
              <button type="button" className={`${styles.btn} ${styles.btnWhiteBg}`}>
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default RegUsernameModal;
