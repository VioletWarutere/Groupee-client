// src/components/FilterComponent.jsx
import React from "react";

const FilterComponent = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="mr-2 font-bold text-gray-700">
        Filter by:
      </label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">All</option>
        <option value="savings">Savings</option>
        <option value="expenses splitting">Expenses Splitting</option>
      </select>
    </div>
  );
};

export default FilterComponent;
