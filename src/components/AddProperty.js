import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";
import "../styles/alert.css";

const AddProperties = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    if (
      fields.title.trim() === "" ||
      fields.bedrooms.trim() === "" ||
      fields.bathrooms.trim() === "" ||
      fields.price.trim() === "" ||
      fields.email.trim() === ""
    ) {
      setAlert({
        message: "Please fill in all required fields.",
        isSuccess: false,
      });
      return;
    }

    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then((response) =>
        setAlert({
          message: "Property Added",
          isSuccess: true,
        })
      )
      .catch((error) =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="Enter the title"
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            Type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              placeholder="Enter the number of bedrooms"
            />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              placeholder="Enter the number of bathrooms"
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="Enter the price"
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      </form>
    </div>
  );
};

export default AddProperties;
