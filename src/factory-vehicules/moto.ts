import { VehiculeFactory } from "./vehiculeFactory";

export class Moto extends VehiculeFactory{

    public constructor(nom: string) {
        super();
        this.nom = nom;
        this.setTypeVehicule('moto');
    }

}