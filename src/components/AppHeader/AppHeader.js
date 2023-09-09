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

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled, and if the menu is open, close it
      if (isMenuOpen) {
        setMenuOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener("scroll", handleScroll);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Nav ref={menuRef} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default AppHeader;
