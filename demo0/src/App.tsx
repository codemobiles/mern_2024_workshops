import { useState } from "react";

export default function App() {
  // let count = 0 // non-side effect variable
  const [count1, setCount1] = useState(0); // state

  // JSX => Javascript + XML
  return (
    <>
      <div>Lek CodeMobiles {count1}</div>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Add
      </button>
    </>
  );
}
