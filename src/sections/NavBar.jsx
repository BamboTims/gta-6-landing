import React from "react";

const NavBar = () => {
  return (
    <nav>
      <img
        src={`${import.meta.env.BASE_URL}images/nav-logo.svg`}
        className="scale-90"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/menu.svg`}
        className="w-10"
      />
    </nav>
  );
};

export default NavBar;
