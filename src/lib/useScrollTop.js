import { useEffect } from "react";
import { useLocation } from "wouter";

export const useScrollTop = () => {
  const page = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [[page]]);

  return;
};
