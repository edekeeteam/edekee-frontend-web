import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./NavBarLayout.module.scss";
import Dropdown from "../../components/Dropdown/Dropdown";

function NavBarLayout() {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Outlet />
      </div>
      <Dropdown />
    </>
  );
}

export default NavBarLayout;
