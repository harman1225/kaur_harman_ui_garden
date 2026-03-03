import React from "react";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton = ({ label, name }: RadioButtonProps) => {
  return (
    <label>
      <input type="radio" name={name} /> {label}
    </label>
  );
};