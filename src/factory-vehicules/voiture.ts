import { VehiculeFactory } from "./vehiculeFactory";

export class Voiture extends VehiculeFactory{

    public constructor(name: string) {
        super();
        this.nom = name;
        this.setTypeVehicule('voiture');
    }

}