import { ControllerInterface } from "src/utils/controller-interface";
import { Controller } from './../../utils/controller';

export class CompanyController extends Controller implements ControllerInterface {

    public constructor() {
        super();
        this.loadView();
        this.setListeners();
    }

    public loadView(): void {
        

        $.get(
            './src/modules/company/view/company-form.html',
            (data: any) => {
                const form: any = $.parseHTML(data), nodeNames = [];
                Controller.app.append(form);
            }
        );
    }

    public setListeners(): void {
        Controller.app.on(
            'keyup', // écouter les appuis sur les touches du clavier
            '#company', // Restreint aux éléments qui portent l'identifiant company donc le formulaire
            // En gros ==> on écoute les appuis sur les touches dans le formulaire 'company-form'
            (event: any): void => this._checkZipCode(event) 
        );

        Controller.app.on(
            'click',
            '#company',
            (event: any) => this._getCity(event)
        );
    }

    private _getCity(event:any) {
        const object: JQuery = $(event.target);

        //Est ce que la cible est une liste de ligne?
        if (object.is('li')) {
            const ville: string = object.html();
            console.log('Ville sélectionné :' + ville);
            const cityField : JQuery = object.parent().parent().parent().next().children('input');
            //const cityField: JQuery = object.find('#company-city'); 
            //==> Ne fonctionne pas car au moment du chargement des listeners  le # nest pas chargé
            cityField.val(ville.toString());
            // Supprimer la liste... entiérement 
            object.parent().remove();
        }
    }

    private _checkZipCode(event: any): void {
        
        const object: JQuery = $(event.target); // objet dans lequel a eu lieu l'appui sur une touche
        let api: string = 'https://vicopo.selfbuild.fr/cherche/';

        if (object.attr('id') == 'company-zipcode') {
            // Check if value has 5 digits
            if (object.val().toString().length === 5) {
                // Call the API...
                $.ajax({
                    url: api + object.val(), 
                    method: 'get',
                    dataType: 'json',
                    success: (data: any) => {
                        const cities: Array<any> = data.cities;


                        // Cool way with map method
                        const liste: Array<string> = cities.map((ville) => {
                            return ville.city;
                        });

                        //Old school method before map method
                        const citiesListing: Array<string> = new Array<string>();
                        cities.forEach((ville) => {
                            citiesListing.push(ville.city);
                        });
                        console.log(JSON.stringify(liste));

                        //Maintenant on doit envoyer la liste vers la page HTML
                        const docking: JQuery = object.next('div');
                        docking.children('ul').remove();
                        const HtmlList: JQuery = ($('<ul>')).addClass('list-unstyled');
                        liste.forEach((ville) => {
                            let HtmlRow: JQuery = ($('<li>')).html(ville.toString());
                            HtmlList.append(HtmlRow);
                        })

                        docking.append(HtmlList);
                    },
                    error: (xhr, error) => { //xhr donne raison des erreurs

                    },
                });

                // Je veux afficher
                //console.log(JSON.stringify(data)); ==> ne fonctionne pas car pour faire appel
                //a une api il faut faire un appel asynchrone!
            }
        }
    }
}