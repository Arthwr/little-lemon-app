import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const AppHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Nav ref={menuRef} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default AppHeader;
