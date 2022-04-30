// import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
// import { SubMenuContext } from "../../common/context/SubMenuContext";

// eslint-disable-next-line react/prop-types
function NavbarLayout({ children }) {
  // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // const [page, setPage] = useState({ page: "", links: [] });
  // const [location, setLocation] = useState({});

  // const openSubmenu = (page, coordinates) => {
  //   if (!isSubmenuOpen) {
  //     setPage(page);
  //     setLocation(coordinates);
  //     setIsSubmenuOpen(true);
  //   } else {
  //     setIsSubmenuOpen(false);
  //   }
  // };
  return (
    // <SubMenuContext.Provider value={{ page, setPage, openSubmenu, isSubmenuOpen, location }}>
    <>
      <Navbar />
      <div style={{ paddingTop: "90px" }}>{children}</div>
    </>
    // </SubMenuContext.Provider>
  );
}

export default NavbarLayout;
