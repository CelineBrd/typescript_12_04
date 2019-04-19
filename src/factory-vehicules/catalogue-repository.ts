import { Vehicule } from "./vehicule";
import { Voiture } from "./voiture";

export class Catalog {
   private catalog: Array<Vehicule> = new Array<Vehicule>();

   public add(vehicule: Vehicule): Catalog {
       this.catalog.push(vehicule);
       return this;
   }

   public catalogue(): string {
       let listing: string;

       this.catalog.forEach((vehicule) => {
           if (vehicule instanceof Voiture) {
               listing += 'Voiture ';
           } else {
               listing += 'Moto ';
           }
           listing += vehicule.getNom() + ' Prix catalogue : ' + vehicule.prixDeVente() + '\n';
       });
       return listing;
   }

   public getMargeTotale(): number {
       let marge: number = 0;
       this.catalog.forEach((vehicule) => {
           marge += vehicule.getMarge();
       });
       return marge;
   }
}