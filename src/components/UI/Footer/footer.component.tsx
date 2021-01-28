import React from "react";

const Footer: React.FC = ({ children }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">{children}</div>
    </footer>
  );
};
export default Footer;
