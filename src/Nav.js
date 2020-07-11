import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/indonesia">Indonesia</Link>
        </li>
        <li>
          <Link to="/japan">Japan</Link>
        </li>
        <li>
          <Link to="/malaysia">Malaysia</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
