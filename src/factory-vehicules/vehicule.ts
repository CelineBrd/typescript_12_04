export abstract class Vehicule {
    /**
     * @var string Libellé du type de véhicule
     */
    protected typeVehicule: string;

    protected nom: string;
    protected coutRevient: number;
    protected coeff: number = 1.7;

    public prixDeVente(): number{
        return this.coutRevient * this.coeff;
    }

    public catalog(): string {
        return 'Ma '+ this.typeVehicule + ' ' + this.nom + ' coute ' + this.prixDeVente();
    }

    public setTypeVehicule(type: string){
        this.typeVehicule = type;
    }

    public getNom(): string {
        return this.nom;
    }
    public setNom(value: string) {
        this.nom = value;
    }


    public getCoutRevient(): number {
        return this.coutRevient;
    }
    public setCoutRevient(value: number) {
        this.coutRevient = value;
    }


    public getMarge(): number {
        return this.prixDeVente() - this.coutRevient;
    }


}