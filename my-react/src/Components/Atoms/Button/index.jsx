import React from "react";

const Button = ({ title, mode }) => {
  switch (mode) {
    case "secondary":
      // code
      return (
        <button style={{ color: "white", background: "green" }}>{title}</button>
      );

    case "primary-outline":
      return (
        <button
          style={{
            color: "blue",
            background: "white",
            border: "1px solid blue",
          }}
        >
          {title}
        </button>
      );

    default:
      return (
        <button style={{ color: "white", background: "blue" }}>{title}</button>
      );
  }
};

export default Button;
