import { IPosition } from "./position.interface";

export interface ICharacter {
    _id?: string;
    type?: number;
    user?: any;
    name?: string;
    level?: number;
    inventory?: Array<any>;
    map?: string;
    position?: IPosition,
    equiped?: Array<string>;
}