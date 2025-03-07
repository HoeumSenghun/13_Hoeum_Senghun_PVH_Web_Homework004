import React, { useState } from "react";

export default function FilterComponent({ onFilterChange }) {
  // prevent the page from reload
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [ sortOrder, setSortOrder ] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOrder(selectedSort);
    if (onFilterChange) {
      onFilterChange(selectedSort);
    }
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={(e) => e.preventDefault()}>
      <div className="relative w-full ">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          value={sortOrder}
          onChange={handleSortChange}
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
