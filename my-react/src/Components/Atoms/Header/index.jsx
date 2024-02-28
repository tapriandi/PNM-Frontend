import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="flex py-5 justify-between items-center">
      <h1 className="text-2xl font-bold">Toko Saya</h1>
      <button onClick={() => navigate("./login")}>Login</button>
    </div>
  );
}
