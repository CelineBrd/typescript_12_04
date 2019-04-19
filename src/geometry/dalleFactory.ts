import { Paintable } from "./paintable-interface";
import { Comparable } from "./comparable-interface";

export abstract class DalleFactory implements Paintable, Comparable<DalleFactory>{
    /**
     * @var string Libellé du type de dalle à produire
     */
    protected typeDalle : string;
    
    /**
     * Méthode abstraite: impose les concepteurs de dalles
     * à définir dans leurs classes métiers la méthode dessiner()
     */
    public abstract dessiner(): void;

    public setTypeDalle(type: string){
        this.typeDalle = type;
    }

    public paint(color: string): void {
        console.log('Peinture de ' + this.typeDalle + 'en' + color);
    }

    public abstract compareTo(object: DalleFactory): number ;
}