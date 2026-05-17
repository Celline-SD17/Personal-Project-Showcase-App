import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("calls delete function", () => {
  const mockDelete = vi.fn();

  const product = {
    id: 1,
    name: "Nike Air Force",
    price: 2000
  };

  render(
    <ProductCard
      product={product}
      onDelete={mockDelete}
    />
  );

  fireEvent.click(screen.getByText("Delete"));

  expect(mockDelete).toHaveBeenCalled();
});