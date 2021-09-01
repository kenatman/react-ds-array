import React from "react";

const Header = ({ auth }) => {
  return (
    <div>
      <h1>HEADER</h1>
      <button
        onClick={() => {
          auth.logout();
        }}
      >
        LOG OUTaa
      </button>
    </div>
  );
};

export default Header;
