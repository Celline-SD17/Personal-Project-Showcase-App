import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("updates search input", () => {
  const mockSetSearch = vi.fn();

  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={mockSetSearch}
    />
  );

  fireEvent.change(screen.getByPlaceholderText("Search sneakers"), {
    target: { value: "Nike" }
  });

  expect(mockSetSearch).toHaveBeenCalled();
});