import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy';
import { Carre } from './geometry/carre';
import { Cercle } from './geometry/cercle';
import { Triangle } from './geometry/triangle';
import { Table } from './geometry/table';
import { Paintable } from './geometry/paintable-interface';
import { Voiture } from './factory-vehicules/voiture';
import { Moto } from './factory-vehicules/moto';
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
*/

 // Instancier un repository de companyModel
 const companyRepository: CompanyRepository = new CompanyRepository();

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel(1);
 aelion.setStrategy(new NameStrategy());
 aelion.setName('Aelion');
 aelion.setAddress('Chemin de Gabardie');
 aelion.setCodePostale(31200);
 aelion.setVille('Toulouse');
 aelion.setNumeroTel('0524569587');
 aelion.setLogo('assets/images/aelion.png');

 companyRepository.add(aelion);

 // Création d'une autre instance de classe
 const cap: CompanyModel = new CompanyModel(2);
 cap.setStrategy(new AllStrategy());
 cap.setName('CapGemini');
 cap.setAddress('Bla bla bla');
 cap.setCodePostale(31000);
 cap.setVille('Toulouse');
 cap.setNumeroTel('0521252698');
 cap.setLogo('assets/images/capgemini.png');

 companyRepository.add(cap);

 // Pour les imprimer
 console.log('Objet aelion: ' +aelion.getId() + ' ' + aelion.getName() +' '+ aelion.getAddress() + ' ' + aelion.getCodePostale() + ' ' + aelion.getVille());
 console.log('Objet cap: ' + cap.getId() + ' ' + cap.getName() + ' ' + cap.getAddress() + ' '+ cap.getCodePostale() + ' '+ cap.getVille());

 
 // Envoyer les informations vers la page web
 const toHtml = new ToHtml();
 
 //toHtml.appendToPage(aelion.useOutputStrategy());
 //toHtml.appendToPage(cap.useOutputStrategy());

 // Illustration des classes héritages
 const grandCarre: Carre = new Carre();
 grandCarre.dessiner();

 const unAutreGrandCarre: Carre = new Carre();

 //Je veux comparer les 2 carrés
 console.log(grandCarre.compareTo(unAutreGrandCarre));

 const petitCarre: Carre = new Carre();

 const jeSuisUnCercle: Carre = new Carre();
 // Demande à Robert de recalibrer la machine à 50
 jeSuisUnCercle.setSideLength(100);
 jeSuisUnCercle.dessiner();

 // Je demande à Robert de produire des dalles circulaires de 75
 const dalleCirculaire75: Cercle = new Cercle();
 dalleCirculaire75.setDiametre(75);
 dalleCirculaire75.dessiner();

 // Production Triangle
 const dalleTriangulaire: Triangle = new Triangle();
 dalleTriangulaire.setKind('Equilateral');
 dalleTriangulaire.dessiner();

 // Production d'une table
 const laTable: Table = new Table(100,100);

 const toCabine: Array<Paintable> = new Array<Paintable>();
 toCabine.push(grandCarre);
 toCabine.push(petitCarre);
 toCabine.push(jeSuisUnCercle);
 toCabine.push(dalleCirculaire75);
 toCabine.push(dalleTriangulaire);
 toCabine.push(laTable);


 toCabine.forEach((object: any) => {
    object.paint('blue');
 });



 //Vehicule Factory

 // Création instance peugeot 107
 const peugeot107: Voiture = new Voiture('Peugeot 107');
 peugeot107.setCoutRevient(8000);
 peugeot107.prixDeVente();


 // Création instance moto BMW C600 Sport
const bmwc600: Moto = new Moto('BMW C600 Sport');
bmwc600.setCoutRevient(10000);
bmwc600.prixDeVente();

// Affichage du catalogue de mes véhicules
 const CataloguePrix : Array<string> = new Array<string>();
 CataloguePrix.push(peugeot107.catalog());
 CataloguePrix.push(bmwc600.catalog());
 
 CataloguePrix.forEach((phrase: string) => {
     console.log(phrase);
 })


 // Calcul de la marge Totale
 let margeTotale : number = 0;
 const CatalogueMarge : Array<number> = new Array<number>();
 CatalogueMarge.push(peugeot107.getMarge());
 CatalogueMarge.push(bmwc600.getMarge());

 
 CatalogueMarge.forEach((marge: number) => {
     margeTotale = margeTotale + marge;
 })
 console.log('Ma marge Totale est : ' + margeTotale);

