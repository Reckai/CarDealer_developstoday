import {  VehiclesFetchResultByTypeAndYEar } from "@/app/types/Cars";
import { client } from "../client/client";

export async function fetchVehicleDataByModelYearAndMakeId(vehicleType: string, year: string) {
  const url = `GetModelsForMakeIdYear/makeId/${vehicleType}/modelyear/${year}`;
  const response = await client({ routeWithoutBaseUrl: url });
  const data: VehiclesFetchResultByTypeAndYEar = await response.json();
  return data.Results;
}
