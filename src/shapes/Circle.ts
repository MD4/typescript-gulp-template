import {Shape} from "./Shape";

/**
 * Represent a circle with a given radius
 */
export class Circle implements Shape {
    /**
     * Circle radius
     */
    private radius:number;

    /**
     * Constructor
     * @param radius Circle radius
     */
    constructor(radius:number) {
        this.radius = radius;
    }

    getSurface():number {
        return Math.PI * this.radius * 2;
    }

}