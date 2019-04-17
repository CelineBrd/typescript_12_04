import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';

/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel();
 aelion.setId(1);
 aelion.setName('Aelion');
 aelion.setAddress('Chemin de Gabardie');
 aelion.setCodePostale(31200);
 aelion.setVille('Toulouse');
 aelion.setNumeroTel('0524569587');
 aelion.setLogo('assets/images/aelion.png');

 // Création d'une autre instance de classe
 const cap: CompanyModel = new CompanyModel();
 cap.setId(2);
 cap.setName('CapGemini');
 cap.setAddress('Bla bla bla');
 cap.setCodePostale(31000);
 cap.setVille('Toulouse');
 cap.setNumeroTel('0521252698');
 cap.setLogo('assets/images/capgemini.png');



 // Pour les imprimer
 console.log('Objet aelion: ' + aelion.getName() +' '+ aelion.getAddress() + ' ' + aelion.getCodePostale() + ' ' + aelion.getVille());
 console.log('Objet cap: ' + cap.getName() + cap.getAddress() + cap.getCodePostale() + cap.getVille());

 // Envoyer les informations vers la page web
 const toHtml = new ToHtml();
 toHtml.toPage(aelion);
 toHtml.toPage(cap);

 // Ecouter le click dans le document
 const laDiv: any = document.querySelector('.click');
 laDiv.addEventListener(
     "click",
     () => {
         alert('Merci...')
     }
 );