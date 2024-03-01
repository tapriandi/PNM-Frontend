import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex py-5 justify-between items-center">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-blue-500">Toko Saya</h1>
      </Link>
      <div>
        {isAuth ? (
          <div className="flex space-x-10">
            <Link to={"/profile"}>
              <h1>Profile</h1>
            </Link>
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => navigate("./login")}>Login</button>
        )}
      </div>
    </div>
  );
}
