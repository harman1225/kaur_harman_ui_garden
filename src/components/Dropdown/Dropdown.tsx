import React from "react";
import { DropdownProps } from "./Dropdown.types";

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value = "",
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};