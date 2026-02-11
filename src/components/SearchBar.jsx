import { useState } from "react";

export default function SearchBar({ onSearch, disabled }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder={
          disabled
            ? "Study in progress… search locked"
            : "Search a study topic"
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled}
      />
      <button disabled={disabled}>Search</button>
    </form>
  );
}
