import { useState } from "react";
import { Input, Button } from "../Components/Atoms";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  
  return (
    <form>
      <Input label="Username" onChange={setUsername} />
      <Input label="Password" onChange={setPassword} type="password" />
      <Button title="Login" onClick={handleLogin} />
    </form>
  );
}
