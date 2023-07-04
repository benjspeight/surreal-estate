import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("<PropertyCard />", () => {
  const property = {
    title: "Beautiful House",
    type: "Detached",
    bathrooms: 2,
    bedrooms: 3,
    price: "£250,000",
    city: "Manchester",
    email: "example@example.com",
  };

  it("renders the property title correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Beautiful House")).toBeInTheDocument();
  });

  it("renders the property type correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Detached")).toBeInTheDocument();
  });

  it("renders the number of bathrooms correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("2")).toBeInTheDocument();
  });

  it("renders the number of bedrooms correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("3")).toBeInTheDocument();
  });

  it("renders the property price correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("£250,000")).toBeInTheDocument();
  });

  it("renders the property city correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Manchester")).toBeInTheDocument();
  });

  it("renders the property email correctly", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("example@example.com")).toBeInTheDocument();
  });
});
