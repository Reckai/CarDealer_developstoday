import { VehicleByType, VehicleByYearAndType, VehiclesFetchResultByType, VehiclesFetchResultByTypeAndYEar } from "@/app/types/Cars"
import { client } from "../client/client"

export const getVehicleTypes = async ()=>{
   const url= "GetMakesForVehicleType/car"
    const response = await client({routeWithoutBaseUrl:url})
    const data:VehiclesFetchResultByType = await response.json()
    return data.Results
}