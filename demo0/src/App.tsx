import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Lek CodeMobiles {lek}</div>
      <button
        onClick={() => {
          dog(lek + 1);
        }}
      >
        Add
      </button>
    </>
  );
}
