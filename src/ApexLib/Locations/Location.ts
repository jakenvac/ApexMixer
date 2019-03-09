export interface Location {
    name: string;
    coords: Coords;
}

export interface Coords {
    top: number,
    left: number,
    width: number,
    height: number,
}