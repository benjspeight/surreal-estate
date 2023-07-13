import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];
  const navigate = useNavigate();
  const { search } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const queryString = buildQueryString("query", {
      title: { $regex: searchQuery },
    });

    const queryParams = queryString.replace(/%20/g, "+"); // Replace spaces with "+"
    navigate(queryParams);
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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SideBar;
