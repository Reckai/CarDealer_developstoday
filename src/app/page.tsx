import { getVehicleTypes } from "./api/services/getVehicleTypes";
import TypeAndYearSelector from "./components/TypeAndYaerSelector/TypeAndYearSelector";

export default async function Home() {
  const types = await getVehicleTypes();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <TypeAndYearSelector vehicleTypes={types} />
    </main>
  );
}
