
type VehicleByType={
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
}
type VehicleByYearAndType={
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}


interface VehiclesFetchResultByTypeAndYEar {
    count: number;
    Message:string;
    SearchCriteria:string
    Results: VehicleByYearAndType[]
}


interface VehiclesFetchResultByType {
    count: number;
    Message:string;
    SearchCriteria:string
    Results: VehicleByType[]
}

export type{
    VehicleByType,
    VehiclesFetchResultByType,
    VehiclesFetchResultByTypeAndYEar,
    VehicleByYearAndType
    
}