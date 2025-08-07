import { useState, useRef, useEffect } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  // Keep a ref to always have the latest val
  const valRef = useRef(val);

  // Update ref whenever val changes
  useEffect(() => {
    valRef.current = val;
  }, [val]);

  function increment() {
    setCount((count) => count + valRef.current);
  }

  return { count, increment, val, setVal };
}
