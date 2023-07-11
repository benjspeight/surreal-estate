import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];
  const location = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const { search } = location;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <h3>Filter By City</h3>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link
              to={buildQueryString("query", { city })}
              className="sidebar-link"
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Sort by Price</h3>
      <ul>
        <li>
          <Link
            to={buildQueryString("sort", { price: 1 })}
            className="sidebar-link"
          >
            Ascending
          </Link>
        </li>
        <li>
          <Link
            to={buildQueryString("sort", { price: -1 })}
            className="sidebar-link"
          >
            Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
