"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button onClick={() => setCount((pre) => pre + 1)}>숫자 증가</button>
    </>
  );
}
