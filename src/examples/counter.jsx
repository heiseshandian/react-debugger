import { useEffect } from "react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      {count}
    </div>
  );
}
