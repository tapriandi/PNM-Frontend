import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [warna, setWarna] = useState(false);

  useEffect(() => {
    console.log("hallo");
  }, [count]);

  return (
    <>
      <h1 style={warna ? { color: "green" } : { color: "blue" }}>
        {warna ? "Hijau" : "Biru"}
      </h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setWarna(!warna)}>{warna ? "Hijau" : "Biru"}</button>
        <button onClick={() => setCount(count + 2)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
