import { Vehicule } from "./vehicule";
import { Moto } from "./moto";
import { Voiture } from "./voiture";

export class VehiculeFactory {

    public static createVehicule(type: string, name: string): Vehicule {
        let vehicule: Vehicule;

        if( type.toLowerCase() === 'voiture') {
            vehicule = new Voiture(name);
        } else {
            vehicule = new Moto(name);
        }

        return vehicule;
    }
}