import { useState } from "react";

export default function Intro() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>Lek CodeMobiles {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </>
  );
}
