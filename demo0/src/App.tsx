import { useState } from "react";

export default function App() {
  const tmp0 = true; // implicit declation
  const tmp1: number = 0; // explicit declation
  const tmp2: string = "hey";

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
