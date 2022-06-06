/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Button from "../Button/Button";
import styles from "./Dropdown.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { useModalContext } from "../../context/ModalContext";
import { useAuthContext } from "../../context/AuthContext";

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
    content,
    isDropdownOpen,
    setIsDropdownOpen,
    location,
    page: { page, links },
  } = useDropdownContext();

  const { user } = useAuthContext();

  const { setIsModalOpen, setModalValue } = useModalContext();

  const navigate = useNavigate();

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
      {content === "create" ? (
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
      ) : (
        <div className={styles.uploadButtonsSection}>
          <div
            onClick={() => {
              // setIsModalOpen(true);
              // setModalValue("uploadProducts");
              setIsDropdownOpen(false);

              navigate(`/profile/${user}`);
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
            className={styles.uploadButton}
          >
            <img className={styles.img1} src="./icons/createProduct.svg" alt="" />
            <p>View profile</p>
          </div>

          <div
            className={styles.uploadButton}
            onClick={() => {
              // setIsModalOpen(true);
              // setModalValue("uploadvideo");
              navigate(`/orders/${user}`);
              setIsDropdownOpen(false);
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <svg
              style={{ marginRight: "10px" }}
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="white"
                strokeOpacity="0.95"
                strokeWidth="1.5"
              />
              <path
                d="M5 7.36508H15M5 11.6825H13M5 16H10.3333M13.3333 3.77778V1M6.33333 3.77778V1"
                stroke="white"
                strokeOpacity="0.95"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p>Orders</p>
          </div>
          <div
            className={styles.uploadButton}
            onClick={() => {
              // setIsModalOpen(true);
              // setModalValue("uploadvideo");
              // navigate("/orders");
              localStorage.removeItem("userId");
              localStorage.removeItem("token");
              setIsDropdownOpen(false);
              navigate("/home");
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <svg
              style={{ marginRight: "10px" }}
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="white"
                strokeOpacity="0.95"
                strokeWidth="1.5"
              />
              <path
                d="M5 7.36508H15M5 11.6825H13M5 16H10.3333M13.3333 3.77778V1M6.33333 3.77778V1"
                stroke="white"
                strokeOpacity="0.95"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p>LogOut</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
