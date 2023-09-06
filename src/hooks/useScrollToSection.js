import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = (anchor) => () => {
    const id = anchor;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return useCallback(scrollToSection, []);
};

export default useScrollToSection;
