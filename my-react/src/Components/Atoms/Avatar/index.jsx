import React from "react";

const Avatar = ({ title, image }) => {
  return (
    <div
      style={{
        background: "green",
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        overflow: "hidden",
        margin: '5px'
      }}
    >
      {image ? (
        <img
          src={image}
          alt=""
          srcset=""
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <p style={{ color: "white", paddingBottom: "5px", fontSize: '30px' }}>{title[0]}</p>
      )}
    </div>
  );
};

export default Avatar;



// 


