import React, { useState } from "react";
import "../styles/add-property.css";

const initialState = {
  fields: {
    title: "",
    type: "Flat",
    bedrooms: "",
    bathrooms: "",
    price: "",
    city: "Manchester",
    email: "",

    // Add other fields here
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
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
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
