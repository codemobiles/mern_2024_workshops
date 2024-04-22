export default function App() {
  let count = 0;

  // JSX => Javascript + XML
  return (
    <>
      <div>Lek CodeMobiles {count}</div>
      <button
        onClick={() => {
          count++;
        }}
      >
        Add
      </button>
    </>
  );
}
