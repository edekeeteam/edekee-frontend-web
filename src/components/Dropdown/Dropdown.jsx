import React, { useRef, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Dropdown.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { useModalContext } from "../../context/ModalContext";
// import { ModalContext } from "../../context/ModalContext";
// import { useAuthContext } from "../../context/AuthContext";
// import Link from "next/link";

function Dropdown() {
  const container = useRef(null);

  // const {
  //   isSubmenuOpen,
  //   location,
  //   page: { page, links },
  // } = useContext(SubMenuContext);

  const {
    isDropdownOpen,
    setIsDropdownOpen,
    location,
    page: { page, links },
  } = useDropdownContext();

  const { setIsModalOpen, authModalValue, setModalValue } = useModalContext();

  // const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    // console.log(submenu, center, bottom);
  }, [page, location, links]);

  // const handleAuthModal = () => {
  //   // document.body.style.overflow = "hidden";
  //   router.push("/auth");
  //   // setIsAuthModalOpen(true);
  // };
  const handleKeyDown = () => {
    // console.log('');
  };

  return (
    <div className={`${styles.dropdown} ${isDropdownOpen && styles.show}`} ref={container}>
      {authModalValue === 0 ? (
        <Button
          size="large"
          label="Sign up/ Sign in"
          bgcolor="white"
          handleClick={() => {
            // console.log("clicked dropdown");

            setIsModalOpen(true);
            setModalValue("signup");
            setIsDropdownOpen(false);
            // setIsAuthModalOpen(true);
            // handleAuthModal();
          }}
        />
      ) : (
        <div className={styles.uploadButtonsSection}>
          <div
            onClick={() => {
              setIsModalOpen(true);
              setModalValue("uploadProducts");
              setIsDropdownOpen(false);
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
            className={styles.uploadButton}
          >
            <img className={styles.img1} src="./icons/createProduct.svg" alt="" />
            <p>Upload Product</p>
          </div>

          <div
            className={styles.uploadButton}
            onClick={() => {
              setIsModalOpen(true);
              setModalValue("uploadvideo");
              setIsDropdownOpen(false);
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <img className={styles.img} src="./icons/createVideo.svg" alt="" />
            <p>Upload Video</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
