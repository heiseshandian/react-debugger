import { useRef } from "react";
import { useState, useEffect } from "react";

export function Update() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef();

  if (count > 2) {
    useEffect(() => {
      setTimeout(() => setCount(1), 1000);
      setTimeout(() => buttonRef.current.click(), 1040);
    }, []);
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        +2
      </button>
      <div>
        {new Array(5000).fill(0).map((val, i) => (
          <span key={i}>{count}</span>
        ))}
      </div>
    </>
  );
}
