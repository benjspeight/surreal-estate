import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="properties">
      <h3 className="properties__header">Properties Page</h3>
      <PropertyCard
        title="Beautiful 2 bed home"
        type="House"
        bedrooms="2"
        bathrooms="1"
        price="£150000"
        city="Manchester"
        email="test@test.com"
      />
    </div>
  );
};

export default Properties;
