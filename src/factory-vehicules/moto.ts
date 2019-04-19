import { Vehicule } from "./vehicule";

export class Moto extends Vehicule{

    public constructor(nom: string) {
        super();
        this.nom = nom;
        this.setTypeVehicule('moto');
    }

}