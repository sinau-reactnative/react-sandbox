import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/personal">Personal</Link>
      </li>
      <li>
        <Link to="/setting">Setting</Link>
      </li>
    </ul>
  );
};

export default Header;
