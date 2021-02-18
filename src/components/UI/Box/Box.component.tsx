import React from "react";

const Box: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <div className="box" id={name} key={name}>
      {children}
    </div>
  );
};
export default Box;
