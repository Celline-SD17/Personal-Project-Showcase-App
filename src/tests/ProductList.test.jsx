import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";

test("renders shoes in the product list", () => {
  const shoes = [
    { id: 1, name: "Nike Air", price: 2000 },
    { id: 2, name: "Adidas Ultraboost", price: 3500 },
  ];

  render(<ProductList products={shoes} />);

  expect(screen.getByText("Nike Air")).toBeInTheDocument();
  expect(screen.getByText("Adidas Ultraboost")).toBeInTheDocument();
});