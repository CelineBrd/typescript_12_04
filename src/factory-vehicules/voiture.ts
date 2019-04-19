import { Vehicule } from "./vehicule";

export class Voiture extends Vehicule{

    public constructor(name: string) {
        super();
        this.nom = name;
        this.setTypeVehicule('voiture');
    }

}