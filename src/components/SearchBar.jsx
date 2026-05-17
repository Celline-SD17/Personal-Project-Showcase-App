import "./Searchbar.css"
function SearchBar({ searchTerm, setSearchTerm}) {
    return (
        <div className="search-container">
            <label for="search">Search sneakers:</label>
            <input type="text" placeholder="Search sneakers"value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)
             }
        />

        </div>
        

    )

}

export default SearchBar