export interface ICity {
    id: number;
    title: string;
    coordX: number;
    coordY: number;
    gold: number;
    population: number;
}

export interface IMapCity {
    id: number;
    title: string;
    coordX: number;
    coordY: number;
}

export interface ICityResources {
    id?: number;
    gold: number;
    population: number;
    productionGold?: number;
}

export interface ICityBuilding {
    buildingId: number;
    cityId: number;
    lvl: number;
}

export interface ICityWarship {
    warshipId: number;
    cityId: number;
    qty: number;
}

export interface ICityBuildingQueue {
    buildingId: number;
    cityId: number;
    lvl: number;
    gold: number;
    population: number;
    time: number;
    deadline: string;
}

export interface ICityResearchQueue extends ICityBuildingQueue {
    researchId: number;
}

export interface ICityWarshipQueue {
    warshipId: number;
    cityId: number;
    qty: number;
    time: number;
    deadline: string;
}

export interface IBuildingResource {
    buildingId: number;
    gold: number;
    population: number;
    lvl: number;
}

export interface IResearchResource extends IBuildingResource {
    researchId: number;
}

export interface IWarshipResource extends IBuildingResource {
    warshipId: number;
    time: number;
}

export interface IFleetTasksDictionary {
    id: number;
    slug: string;
    title: string;
    description: string;
}

export interface IFleetStatusesDictionary {
    id: number;
    title: string;
    description: string;
}

export interface IDictionary {
    buildings: IBuilding[];
    buildingResources: IBuildingResource[];
    buildingsProduction: IBuildingsProduction[];
    researches: IResearch[];
    userResearches: IUserResearch[];
    researchResources: IResearchResource[];
    warships: IWarship[];
    warshipsResources: IWarshipResource[];
    fleetTasksDictionary: IFleetTasksDictionary[];
    fleetStatusesDictionary: IFleetStatusesDictionary[];
}

export interface IBuilding {
    id: number;
    title: string;
    description: string;
}

export interface IResearch extends IBuilding {}

export interface IWarship extends IBuilding {
    attack: number;
    speed: number;
    capacity: number;
    health: number;
    time: number;
    gold: number;
    population: number;
}

export interface IUserResearch {
    id: number;
    lvl: number;
    researchId: number;
}

export interface IBuildingsProduction {
    buildingId: number;
    lvl: number;
    qty: number;
    resource: string;
}

export type TTask = "attack" | "move" | "trade" | "transport";

export interface IFleetDetail {
    fleetId?: number;
    warshipId: number;
    qty: number;
}

export interface IFleet {
    cityId: number;
    coordX: number;
    coordY: number;
    recursive?: 1 | 0;
    taskType: TTask;
}

export interface ICityFleet {
    id: number;
    cityId: number;
    targetCityId: number;
    fleetDetails: IFleetDetail[];
    recursive?: 1 | 0;
    /*taskType: TTask;*/
    fleetTaskId: number;
    fleetStatusId: number;
    speed: number;
    gold: number;
    time: number;
    deadline: string;
}
