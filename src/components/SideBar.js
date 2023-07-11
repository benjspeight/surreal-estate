import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

  return (
    <div className="sidebar">
      <h3>City Links</h3>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link
              to={`?query={"city":"${encodeURIComponent(city)}"}`}
              className="sidebar-link"
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
