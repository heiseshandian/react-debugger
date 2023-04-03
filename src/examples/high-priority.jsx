import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(2);
    }, 1000);

    setTimeout(() => {
      setCount(3);
    }, 1020);
  }, []);

  console.log(count);

  return (
    <ul onClick={() => setCount((c) => c + 1)}>
      {new Array(10000).fill(0).map((_, i) => (
        <span key={i}>{count}</span>
      ))}
    </ul>
  );
}
