import { DalleFactory } from "./dalleFactory";

export class Triangle extends DalleFactory {
    private whatKind: string='Isocele';

    public constructor() {
        super();
        this.setTypeDalle('Triangle');
    }

    public setKind(kind: string){
        this.whatKind = kind;
    }
    
    public dessiner(): void {
        console.log('Je suis un: ' + this.typeDalle);
        console.log('De type : ' + this.whatKind);
    }

    public compareTo(object: Triangle): number {
        return this.whatKind === object.whatKind ? 0 : -1 ;
    }

} 