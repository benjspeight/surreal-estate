import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    axios
      .get(`http://localhost:3000/api/v1/PropertyListing?query=${query}`)
      .then((response) => {
        const { data } = response;
        setProperties(data);
      })
      .catch((error) => {
        setAlert({
          message: "Failed to fetch property listings. Please try again later.",
        });
      });
  }, [location.search]);

  return (
    <div className="properties">
      <SideBar />
      <h3 className="properties__header">Properties Page</h3>
      {alert.message && <Alert message={alert.message} />}
      <div className="property-card-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card-wrapper">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
