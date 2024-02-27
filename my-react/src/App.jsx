import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./Components/Atoms";

function App() {
  return (
    <>
      <Button title="Hello" />
      <Button title="Saya" mode="secondary" />
      <Button title="Naruto" mode="primary-outline" />
    </>
  );
}

export default App;

// avatar
// title = required, ambil initial 2 character
// image = 