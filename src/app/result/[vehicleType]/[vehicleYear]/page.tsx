import React, { Suspense } from "react";
import { getVehicleTypes } from "@/app/api/services/getVehicleTypes";
import { getYearsFrom2015 } from "@/app/helpers/getYears";
import { VehicleByType, VehicleByYearAndType } from "@/app/types/Cars";
import { fetchVehicleDataByModelYearAndMakeId } from "@/app/api/services/fetchVehicleDataByModelYearAndMakeId";
import ButtonComponent from "@/app/components/TypeAndYaerSelector/Button/ButtonComponent";

export async function generateStaticParams() {
  const vehicleTypes: VehicleByType[] = await getVehicleTypes();
  const years = getYearsFrom2015();

  return vehicleTypes.flatMap((vehicleType) =>
    years.map((year) => ({
      vehicleType: vehicleType.MakeName,
      vehicleYear: year.toString(),
    }))
  );
}

const ResultPage = async ({
  params,
}: {
  params: { vehicleType: string; vehicleYear: string };
}) => {
  const vehicles = await fetchVehicleDataByModelYearAndMakeId(
    params.vehicleType,
    params.vehicleYear
  );

  return (
    <div className="w-full">
      <ButtonComponent className="my-4 md:w-1/2" href="/" isDisabled={false}>
        Go Back
      </ButtonComponent>
      <Suspense fallback={<div>...loading</div>}>
        {vehicles.map((vehicle, i) => (
          <div
            className="bg-white dark:text-black shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            key={vehicle.Model_ID}
          >
            {vehicle.Make_Name}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {vehicle.Model_Name}
            </h3>
            <p className="text-sm text-gray-600">ID: {vehicle.Model_ID}</p>
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default ResultPage;
