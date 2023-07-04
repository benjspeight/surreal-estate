import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/propertycard.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h3 className="property-card__title">{title}</h3>
      <p className="property-card__type">Type: {type}</p>
      <p className="property-card__info">
        <span>
          <FontAwesomeIcon icon={faBed} /> {bedrooms}
        </span>
        <span>
          <FontAwesomeIcon icon={faBath} /> {bathrooms}
        </span>
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {city}
        </span>
      </p>
      <p className="property-card__price">{price}</p>
      <p className="property-card__email">
        <FontAwesomeIcon icon={faEnvelope} /> {email}
      </p>
    </div>
  );
};

export default PropertyCard;
