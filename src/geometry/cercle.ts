import { DalleFactory} from "./dalleFactory";

export class Cercle extends DalleFactory {
    private diametre: number = 200;

    public constructor() {
        super();
        this.setTypeDalle('cercle');
    }
 
    public dessiner(): void {
        console.log('Je suis un' + this.typeDalle);
        console.log('Et j\'ai un diametre de : ' + this.diametre);
    }
 
    public setDiametre(diametre: number): void{
        this.diametre = diametre;
    }

    public compareTo(object: Cercle): number {
        return this.diametre === object.diametre ? 0 : -1 ;
    }
 }