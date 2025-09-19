"use client";

import React, { useState, useEffect, useRef } from "react";

const CustomDropdown = ({
  options,
  selectedOption,
  onOptionSelect,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get selected option details
  const selectedOptionDetails = options.find(
    (option) => option.value === selectedOption
  );

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOptionDetails ? selectedOptionDetails.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onOptionSelect(option.value);
                setIsDropdownOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors duration-200 ${
                selectedOption === option.value
                  ? "bg-green-50 text-green-700"
                  : "text-gray-900"
              }`}>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
