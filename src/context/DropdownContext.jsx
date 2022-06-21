/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const DropdownContext = React.createContext();

// eslint-disable-next-line react/prop-types
function DropdownProvider({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [content, setContent] = useState("profile");

  //   const [DropdownValue, setDropdownValue] = useState(0);

  const openDropdown = (newpage, coordinates) => {
    if (!isDropdownOpen) {
      setPage(newpage);
      // console.log(newpage);
      setLocation(coordinates);
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const changeDropdownContent = (newContent) => {
    setContent(newContent);
  };

  // const values = useMemo(
  //   () => (),
  //   []
  // );

  return (
    <DropdownContext.Provider
      value={{
        isDropdownOpen,
        setIsDropdownOpen,
        page,
        setPage,
        openDropdown,
        location,
        changeDropdownContent,

        content,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
// make sure use
export const useDropdownContext = () => useContext(DropdownContext);

export { DropdownContext, DropdownProvider };
