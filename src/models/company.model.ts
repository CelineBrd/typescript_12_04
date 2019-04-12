export class CompanyModel {
    private name : string;
    private addresse: string;
    private codePostale: number;
    private ville: string;
    private numeroTel: string;


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

    // Getter et Setter pour numéro de tel
    public getNumeroTel(): string{
        return this.numeroTel;
    }
    public setNumeroTel(value: string) {
        this.numeroTel = value;
    }

    public toString(): string {
        let output: string = '<div class="col-12">';
        output += '<h2><i class="icon-office"></i>'+ this.name+ '</h2>';
        output += '<i class="icon-address-book"></i>' + this.addresse + '<br>';
        output += this.codePostale + '<em>' + this.ville + '</em><br>';
        output += '<i class="icon-facebook"></i>'+ this.numeroTel +'</div>';
        return output;
    }

}