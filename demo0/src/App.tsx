import { useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);

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
