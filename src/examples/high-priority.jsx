import { useState, useEffect, useRef } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef();

  const onClick = () => {
    setCount((c) => c + 2);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 1000);

    setTimeout(() => {
      buttonRef.current.click();
    }, 1020);
  }, []);

  console.log(count);

  return (
    <ul ref={buttonRef} onClick={onClick}>
      {new Array(10000).fill(0).map((_, i) => (
        <span key={i}>{count}</span>
      ))}
    </ul>
  );
}
