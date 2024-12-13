import React, { createContext, useContext, useState, useRef, useEffect } from "react";

// Create the context
const NavBarContext = createContext();

// Provide the context
export const NavBarProvider = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const fieldRef = useRef(null);

  const handleLinkAndClose = (link) => {
    setSelectedLink(link);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleField = () => {
    setIsOpen(!isOpen);
    console.log("hamburger field activated");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fieldRef.current && !fieldRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavBarContext.Provider
      value={{
        selectedLink,
        isOpen,
        setSelectedLink,
        toggleField,
        handleLinkAndClose,
        fieldRef,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNavBarContext = () => useContext(NavBarContext);
