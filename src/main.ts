import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy';
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
 
 toHtml.appendToPage(aelion.useOutputStrategy());
 toHtml.appendToPage(cap.useOutputStrategy());
