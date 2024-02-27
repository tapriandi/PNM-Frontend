import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Avatar, Button, Input } from "./Components/Atoms";

function App() {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <>
      <h1>{value}</h1>
      <hr />
      <br />
      {/* <br />
        <br />
        <div>
          <Input label="Username" onChange={(e) => setValue(e.target.value)} />
        </div> 
      */}

      <form>
        <Input label="Username" onChange={setUsername} />
        <Input label="Password" onChange={setPassword} type="password" />
        <Button title="Login" onClick={handleLogin} />
      </form>
    </>
  );
}

export default App;

// int, float, bigint, text, string, boolean
//
