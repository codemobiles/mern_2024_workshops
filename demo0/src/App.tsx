export default function App() {
  const count = 0;

  // JSX => Javascript + XML
  return (
    <>
      <div>Lek CodeMobiles {count}</div>
      <button
        onClick={() => {
          alert("Hey");
        }}
      >
        Add
      </button>
    </>
  );
}
