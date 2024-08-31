import { useState } from "react";

export const useScreen = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  return { screenSize, setScreenSize };
};
