import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value.trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;