import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./NavBarLayout.module.scss";

function NavBarLayout() {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Outlet />
      </div>
    </>
  );
}

export default NavBarLayout;
