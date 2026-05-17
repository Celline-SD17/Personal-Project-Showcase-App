import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

test("submits new product", () => {
  const mockAdd = vi.fn();

  render(<ProductForm onAdd={mockAdd} />);

  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Nike Air Force" }
  });

  fireEvent.change(screen.getByPlaceholderText("Price"), {
    target: { value: "2000" }
  });

  fireEvent.click(screen.getByText("Add Product"));

  expect(mockAdd).toHaveBeenCalled();
});