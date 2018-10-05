export interface IMap {
    version: number;
    id: string;
    wildLife?: Array<string>;
    width: number;
    height: number;
    backgroundImage?: string;
    backgroundStretch?: boolean;
    music?: string;
    audioAmbience?: string;
    tileMap?: string;
    startPosition?: Array<number>;
    tileW: number;
    tileH: number;
    tiles: Array<any>;
}