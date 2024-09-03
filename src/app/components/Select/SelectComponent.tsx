"use client";
import React from "react";

interface TypeAndYearSelectorProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  placeholder: string;
}

const SelectComponent: React.FC<TypeAndYearSelectorProps> = ({
  placeholder,
  children,
  onSelect,
}) => {
  return (
    <select
      onChange={onSelect}
      className="w-full dark:text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value="" disabled selected className="text-muted-foreground">
        {placeholder}
      </option>

      {children}
    </select>
  );
};

export default SelectComponent;
