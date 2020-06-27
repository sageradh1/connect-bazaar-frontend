import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white p-4 text-center" style={footerStyle}>
      Copyright &copy; {new Date().getFullYear()} Connect bazaar Pvt Limited
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
};
