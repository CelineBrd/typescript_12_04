export class CompanyModel {
    private name : string;
    private addresse: string;
    private codePostale: number;
    private ville: string;


    public setName(value: string) {
        this.name = value;
    }
    public getName(): string {
        return this.name;
    } 
    
    public setAddress(value: string) {
        this.addresse = value;
    }
    public getAddress(): string {
        return this.addresse;
    }



    public setCodePostale(value: number) {
        this.codePostale = value;
    }  
    public getCodePostale(): number {
        return this.codePostale;
    }
   

    public getVille(): string {
        return this.ville;
    }
    public setVille(value: string) {
        this.ville = value;
    }

    
    public toString(): string {
        let output: string = '<p><strong>' + this.name + '</strong><br>';
        output += this.addresse + '<br>';
        output += this.codePostale + '<em>' + this.ville + '</em></p>';

        return output;
    }

}