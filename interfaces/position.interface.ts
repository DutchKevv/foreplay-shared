import { ITile } from './tile.interface';

export interface IPosition {
    x?: number; // horizontal (width)
    y?: number; // vertical (height)
    z?: number; // 3D (depth) 
    r?: number;
    gx?: number;
    gz?: number;
    // gy?: number;
    tile?: ITile
}