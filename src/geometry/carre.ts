import { DalleFactory } from "./dalleFactory";

export class Carre extends DalleFactory {

    private sideLength: number =200;

    public constructor() {
        super(); // rappelle la classe parente car setTypeDalle est défini dans la classe parente
        this.setTypeDalle('Carré');
    }

    public setSideLength(side: number): void {
        this.sideLength = side;
    }

    public dessiner(): void {
        console.log('Je suis un : ' + this.typeDalle);
        console.log('Et j\'ai un côté de ' + this.sideLength);
    }

    public compareTo(object: Carre): number {
        return this.sideLength === object.sideLength ? 0 : -1 ;
    }
}