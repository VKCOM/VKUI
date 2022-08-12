import { useState, useEffect } from "react";

export function useViewPortSize() {
  const [viewPortSize, setViewPortSize] = useState({
    viewWidth: 0,
    viewHeight: 0,
  });
  useEffect(() => {
    function handleResize() {
      setViewPortSize({
        viewWidth: window.innerWidth,
        viewHeight: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewPortSize;
}
