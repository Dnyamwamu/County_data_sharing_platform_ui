import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className=" text-white p-2 rounded-lg">
      <ul className="flex">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="mx-2">
              <span className="mx-2">/</span>
              <Link to={to} className="text-white capitalize">
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
