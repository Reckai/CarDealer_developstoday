"use client";
import React, { useState } from "react";
import SelectComponent from "../Select/SelectComponent";

import { getYearsFrom2015 } from "@/app/helpers/getYears";
import ButtonComponent from "./Button/ButtonComponent";

interface VehicleType {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

interface TypeAndYearSelectorProps {
  vehicleTypes: VehicleType[];
}

const TypeAndYearSelector: React.FC<TypeAndYearSelectorProps> = ({
  vehicleTypes,
}) => {
  const [vehicleType, setVehicleType] = useState<number | undefined>();
  const [vehicleYear, setVehicleYear] = useState<number | undefined>();

  const isDisabled = !vehicleType || !vehicleYear;

  const years = getYearsFrom2015();

  const handleVehicleTypeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVehicleType(Number(event.target.value));
  };
  const handleVehicleModelYear = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVehicleYear(Number(event.target.value));
  };

  return (
    <div className="flex  flex-col gap-4 ">
      <h1>Please select make and model year</h1>
      <article>
        <SelectComponent
          placeholder="Select vehicle type"
          onSelect={handleVehicleTypeSelect}
        >
          {vehicleTypes.map((type) => (
            <option key={type.MakeId} value={type.MakeId}>
              {type.MakeName}
            </option>
          ))}
        </SelectComponent>
      </article>
      <article>
        <SelectComponent
          onSelect={handleVehicleModelYear}
          placeholder="Select model year"
        >
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </SelectComponent>
      </article>
      <ButtonComponent
        isDisabled={isDisabled}
        href={isDisabled ? "#" : `/result/${vehicleType}/${vehicleYear}`}
      >
        Next
      </ButtonComponent>
    </div>
  );
};

export default TypeAndYearSelector;
