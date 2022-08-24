import { useCallback, useEffect, useState } from "react";

export const useIsSmallScreen = (maxWidthForSmallScreen: number = 460): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width <= maxWidthForSmallScreen) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return isSmallScreen;
}