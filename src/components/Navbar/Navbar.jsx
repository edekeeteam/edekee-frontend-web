/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";

import Button from "../Button/Button";

import { useDropdownContext } from "../../context/DropdownContext";
import { useBuyContext } from "../../context/BuyContext";

export default function Navbar() {
  const { openDropdown } = useDropdownContext();
  const location = useLocation();

  const [show, handleShow] = useState(false);
  const { cart } = useBuyContext();

  const displayDropdown = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = tempBtn.left - 65;
    const bottom = tempBtn.bottom + 30;
    openDropdown(page, { center, bottom });
  };

  const handleKeyDown = () => {
    // console.log("keydown");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 20) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div className={styles.navbar}>
      <div className={`${styles.navbarContainer} ${show && styles.nav__transluscent}`}>
        <div className={styles.navbarLeft}>
          <span
            className={styles.menuIcon}
            onClick={(e) => {
              displayDropdown(e);
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex="-1"
          >
            <img src="./icons/mainLogo.svg" className="" alt="" />
          </span>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.navbarIcons}>
            <NavLink
              to="/home"
              className={`${(navData) => (navData.isActive ? styles.active : " ")}`}
              style={{ textDecoration: "none" }}
            >
              <span className={styles.navbarIconItem}>
                <svg
                  name="homeIcon"
                  width="20"
                  height="25"
                  viewBox="0 0 26 25"
                  fill={location.pathname === "/home" ? "white" : "#6D7280"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.00016 6.1577V19.9577C5.00016 20.5343 5.00094 20.9065 5.02409 21.1899C5.04629 21.4615 5.08396 21.5623 5.10916 21.6117C5.20503 21.7999 5.35801 21.9528 5.54617 22.0487C5.59562 22.0739 5.69634 22.1116 5.968 22.1338C6.25134 22.1569 6.62361 22.1577 7.20016 22.1577H18.8002C19.3767 22.1577 19.749 22.1569 20.0323 22.1338C20.304 22.1116 20.4047 22.0739 20.4542 22.0487C20.6423 21.9528 20.7953 21.7999 20.8912 21.6117C20.9164 21.5623 20.954 21.4615 20.9762 21.1899C20.9994 20.9065 21.0002 20.5343 21.0002 19.9577V6.1577H23.0002V19.9963C23.0002 20.5234 23.0002 20.9782 22.9696 21.3527C22.9373 21.7481 22.866 22.1413 22.6732 22.5197C22.3856 23.0842 21.9266 23.5431 21.3621 23.8307C20.9838 24.0235 20.5905 24.0948 20.1952 24.1271C19.8206 24.1577 19.3659 24.1577 18.8387 24.1577H7.1616C6.63446 24.1577 6.1797 24.1577 5.80513 24.1271C5.40979 24.0948 5.01657 24.0235 4.63819 23.8307C4.07371 23.5431 3.61476 23.0842 3.32714 22.5197C3.13435 22.1413 3.06303 21.7481 3.03073 21.3527C3.00013 20.9782 3.00014 20.5234 3.00016 19.9962L3.00016 6.1577H5.00016Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5683 15.1577C11.5789 15.1577 11.5895 15.1577 11.6002 15.1577H14.4002C14.4108 15.1577 14.4214 15.1577 14.4321 15.1577C14.6844 15.1577 14.9302 15.1576 15.1384 15.1746C15.367 15.1933 15.6367 15.2374 15.9081 15.3757C16.2845 15.5674 16.5904 15.8734 16.7822 16.2497C16.9205 16.5211 16.9645 16.7909 16.9832 17.0195C17.0002 17.2276 17.0002 17.4734 17.0002 17.7258C17.0002 17.7364 17.0002 17.7471 17.0002 17.7577V24.1577H9.00016V17.7577C9.00016 17.7471 9.00016 17.7364 9.00016 17.7258C9.00013 17.4734 9.0001 17.2276 9.01711 17.0195C9.03579 16.7909 9.07985 16.5211 9.21815 16.2497C9.4099 15.8734 9.71586 15.5674 10.0922 15.3757C10.3636 15.2374 10.6333 15.1933 10.8619 15.1746C11.0701 15.1576 11.3159 15.1577 11.5683 15.1577ZM11.0116 17.1692C11.0112 17.1733 11.0108 17.1777 11.0105 17.1823C11.0009 17.2989 11.0002 17.4612 11.0002 17.7577V22.1577H15.0002V17.7577C15.0002 17.4612 14.9994 17.2989 14.9899 17.1823C14.9895 17.1777 14.9891 17.1733 14.9887 17.1692C14.9846 17.1688 14.9802 17.1684 14.9755 17.168C14.8589 17.1585 14.6967 17.1577 14.4002 17.1577H11.6002C11.3036 17.1577 11.1414 17.1585 11.0248 17.168C11.0202 17.1684 11.0158 17.1688 11.0116 17.1692Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.136384 8.66157C0.414664 9.13863 1.02698 9.29976 1.50403 9.02148L13.0002 2.31541L24.4963 9.02148C24.9733 9.29976 25.5857 9.13863 25.8639 8.66157C26.1422 8.18452 25.9811 7.57221 25.504 7.29392L13.0002 0L0.496292 7.29392C0.0192398 7.57221 -0.141896 8.18452 0.136384 8.66157Z"
                  />
                </svg>
                <p className={`${location.pathname === "/home" ? styles.active : " "}`}>Home</p>
              </span>
            </NavLink>
            <NavLink to="/profile" style={{ textDecoration: "none" }}>
              <span className={styles.navbarIconItem}>
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 21"
                  fill={location.pathname === "/profile" ? "white" : "#6D7280"}
                  // fill="#6D7280"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.646 10.7155C14.6264 9.94415 15.342 8.88642 15.6933 7.68944C16.0445 6.49246 16.014 5.21576 15.6058 4.03696C15.1977 2.85817 14.4323 1.83589 13.4161 1.11235C12.3999 0.388815 11.1835 0 9.93603 0C8.68858 0 7.47215 0.388815 6.45596 1.11235C5.43978 1.83589 4.67438 2.85817 4.26624 4.03696C3.85811 5.21576 3.82754 6.49246 4.17879 7.68944C4.53004 8.88642 5.24564 9.94415 6.22603 10.7155C4.54611 11.3885 3.08032 12.5048 1.98492 13.9454C0.88953 15.386 0.205595 17.0968 0.00603184 18.8955C-0.00841357 19.0268 0.00314838 19.1597 0.0400573 19.2866C0.0769662 19.4134 0.138499 19.5317 0.221143 19.6348C0.388051 19.843 0.630815 19.9763 0.896032 20.0055C1.16125 20.0347 1.42719 19.9573 1.63536 19.7904C1.84352 19.6235 1.97686 19.3807 2.00603 19.1155C2.22562 17.1607 3.15772 15.3553 4.62425 14.0443C6.09078 12.7333 7.98893 12.0085 9.95603 12.0085C11.9231 12.0085 13.8213 12.7333 15.2878 14.0443C16.7543 15.3553 17.6864 17.1607 17.906 19.1155C17.9332 19.3612 18.0505 19.5882 18.2351 19.7525C18.4198 19.9169 18.6588 20.007 18.906 20.0055H19.016C19.2782 19.9753 19.5178 19.8428 19.6826 19.6367C19.8474 19.4307 19.9241 19.1679 19.896 18.9055C19.6955 17.1017 19.0079 15.3865 17.9069 13.9437C16.8059 12.5009 15.3329 11.385 13.646 10.7155ZM9.93603 10.0055C9.14491 10.0055 8.37155 9.7709 7.71375 9.33137C7.05595 8.89185 6.54326 8.26713 6.24051 7.53623C5.93776 6.80533 5.85855 6.00106 6.01289 5.22513C6.16723 4.44921 6.54819 3.73648 7.1076 3.17707C7.66701 2.61766 8.37975 2.2367 9.15567 2.08235C9.93159 1.92801 10.7359 2.00723 11.4668 2.30998C12.1977 2.61273 12.8224 3.12542 13.2619 3.78321C13.7014 4.44101 13.936 5.21437 13.936 6.0055C13.936 7.06636 13.5146 8.08378 12.7645 8.83392C12.0143 9.58407 10.9969 10.0055 9.93603 10.0055Z" />
                </svg>
                <p className={`${location.pathname === "/profile" ? styles.active : " "}`}>
                  Profile
                </p>
              </span>
            </NavLink>

            {/* <NavLink href="/#"> */}
            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <span
                className={`${styles.navbarIconItem} ${styles.cartIcon}`}
                onKeyDown={handleKeyDown()}
                role="button"
                tabIndex="-1"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="11.8525" cy="26.9629" rx="2" ry="2" fill="#6D7280" />
                  <ellipse cx="20.2476" cy="26.9629" rx="2" ry="2" fill="#6D7280" />
                  <path
                    d="M1 1C3.55157 2.27579 4.81579 3.39109 4.81579 6.49474M4.81579 6.49474C4.81579 19.0868 8.17369 21.6053 16.5684 21.6053C24.9632 21.6053 28.3211 19.0868 28.3211 9.01316C28.3211 7.5994 27.4816 6.49474 25.8026 6.49474C24.1237 6.49474 10.4082 6.49474 4.81579 6.49474Z"
                    stroke={location.pathname === "/cart" ? "white" : "#6D7280"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className={`${location.pathname === "/cart" ? styles.active : " "}`}>Cart</p>
                <div className={styles.badge}> {cart.length}</div>
              </span>
            </NavLink>

            {/* </NavLink> */}
            <Button
              size="small"
              label="Create"
              bgcolor="purple"
              handleClick={(e) => {
                displayDropdown(e);
              }}
              // handleClick={displaySubmenu}  stroke={router.pathname === "/cart" ? "white" : "#6D7280"}
            />
          </div>
        </div>
      </div>
      {/* <Dropdown /> */}
    </div>
  );
}
