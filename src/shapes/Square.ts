import {Shape} from "./Shape";

/**
 * Represent a square with a given size
 */
export class Square implements Shape {
    /**
     * Square size
     */
    private size:number;

    /**
     * Constructor
     * @param size Square size
     */
    constructor(size:number) {
        this.size = size;
    }

    getSurface():number {
        return Math.pow(this.size, 2);
    }

}