import React from "react";

const Content: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <div className="content" id={name} key={name}>
      {children}
    </div>
  );
};
export default Content;
