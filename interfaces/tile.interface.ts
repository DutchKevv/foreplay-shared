import { IPosition } from "./position.interface";

export interface ITile extends IPosition {
    _id?: string;
    i?: number;
    w?: number;
    h?: number;
    s?: number;
    blockedBy?: ITile;
    details?: any;
    preMouseOverDetails?: any;
    selected?: boolean;
    img?: string;
    imgEl?: HTMLImageElement;
    frame?: any;
    type?: any;
}