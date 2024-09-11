import { useCallback, useEffect, useRef, useState } from "react";

const useDebounce = (value, delay = 1000) => {
  const [debounce, setDebounce] = useState(value);

  const handleSetDebounce = useCallback(() => {
    setDebounce(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSetDebounce();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounce;
};

export { useDebounce };
