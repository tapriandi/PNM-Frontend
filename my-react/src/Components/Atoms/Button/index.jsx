import React from "react";

const Button = ({ title, mode, type, onClick }) => {
  switch (mode) {
    case "secondary":
      // code
      return (
        <button
          type={type}
          onClick={onClick}
          style={{ color: "white", background: "green" }}
        >
          {title}
        </button>
      );

    case "primary-outline":
      return (
        <button
          style={{
            color: "blue",
            background: "white",
            border: "1px solid blue",
          }}
          type={type}
          onClick={onClick}
        >
          {title}
        </button>
      );

    default:
      return (
        <button
          type={type}
          onClick={onClick}
          style={{ color: "white", background: "blue" }}
        >
          {title}
        </button>
      );
  }
};

export default Button;
