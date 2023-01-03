import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIUrl, geoAPIOptions, geoAPITime, dateTimeOptions } from "../API";

//calling on search change whicg is passed from app file
const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadedOptions = (inputValue) => {
       return fetch(
      `${geoAPIUrl}&namePrefix=${inputValue}`,
      geoAPIOptions,

      
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude}, ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
  };

  const handleChange = (searchData) => {
    //setting new value
    setSearch(searchData);
    //calling on search change
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange} //calling handleChange
      loadOptions={loadedOptions}
    />
  );
};

export default SearchBar;
