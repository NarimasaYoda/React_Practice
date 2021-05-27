import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入を使ってすっきりと
  const { color, message, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return (
    <p style={contentStyle}>
      {message}
      {children}
    </p>
  );
};

export default ColorfulMessage;
