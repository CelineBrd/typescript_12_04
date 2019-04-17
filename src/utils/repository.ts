//on collectionne des infos dans un repository

/**
 * @name repository
 * @description Classe abstraite définissant une collection d'objets
 * @author Aelion
 * @version 1.0.0
 */


export abstract class Repository<T> {
    // attribut de type Map (=structure qui a pour objet d'associer une clé et une valeur)
    protected repository: Map<number, T> = new Map<number, T>();

    //dans la classe concrète liée à la classe abstraite on doit impérativement avoir une méthode add, remove et get !!
    public abstract add(object: T): void; //ajoute élément à la collection

    public abstract remove(object: T): void; //supprime un élément de la collection

    public abstract get(id: number): T; //récupère un élément à la collection

    public getSize(): number {
        return this.repository.size;
    }

}