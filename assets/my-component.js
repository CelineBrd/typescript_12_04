/**
 * @name my-component
 * @author moi
 * @version 1.0.0
 * @description compteur
 **/


// Définition de la valeur Maximale par l'utilisateur
//let valMaxCond;
//do{
    //const valMax = document.getElementById("valeurMax").value;
    //valMaxCond = valMax;
    //if(valMax<1){
    //alert()
    //}
//}while(valMaxCond<1);'La valeur maximale ne doit pas être inférieure à 1 !! Merci de rentrer une autre valeur :)'

$('#buttonOkMax').on(
    "click",
    function(ev){
        let valMax = parseInt(document.getElementById("valeurMax").value);
        console.info('La valeur max est: '+ valMax);
        if(valMax<1){
            alert('La valeur maximale ne doit pas être inférieure à 1 !! Merci de rentrer une autre valeur :)');
            $('#decrease-qty').attr('disabled','disabled');
            $('#increase-qty').attr('disabled','disabled');

        } else{
            $('#decrease-qty').removeAttr('disabled');
            $('#increase-qty').removeAttr('disabled');
        }
    }
)



// Ce qui se passe quand je clique sur le bouton +
$('#increase-qty').on(
    "click",
    function(ev){
        let valMax = parseInt(document.getElementById("valeurMax").value);
        const value = document.getElementById("valeurCompteur").value; // récupère la valeur de l'attribut value et le mets dans value
        let nextValue = parseInt(value);                                // converti la val de l'attribut en nombre
        console.info('Valeur courante de linput: '+ nextValue);

        if(nextValue < valMax){
            nextValue = nextValue +1;
            document.getElementById("valeurCompteur").value = nextValue; 
            $('#decrease-qty').removeAttr('disabled');
        } else {
            $('#increase-qty').attr('disabled','disabled');
            $('[role="alert"] span.message').html('Vous avez atteint la valeur maximale! ');
            $('[role="alert"]').show();
        }

        console.info('Valeur suivante de linput: ' + nextValue);
    }
)

// Ce qui se passe quand je clique sur le bouton -
$('#decrease-qty').on(
    "click",
    function(ev){
        const value = document.getElementById("valeurCompteur").value;
        let nextValue = parseInt(value);
        console.info(nextValue);

        if(nextValue > 1){
            nextValue = nextValue -1;
            document.getElementById("valeurCompteur").value = nextValue;
            $('#increase-qty').removeAttr('disabled');
        } else {
            $('#decrease-qty').attr('disabled','disabled');
            $('[role="alert"] span.message').html('Vous avez atteint la valeur minimale! ');
            //.html permet d'écrire dans l'objet selectionné ce qu'il y a entre parenthèse dans un fichier html
            $('[role="alert"]').show();
        }

        console.info(nextValue);
    }
                
)

//Fonction par défaut de close.bs.alert, quand ferme le message, il "supprime" le code, donc impossible de le réactiver
//utilise preventDefault pour empecher action par défaut et de juste cacher le message plutot que supprimer le code
$('[role="alert"]').on(
    'close.bs.alert',
    function(event){
        event.preventDefault();
        $('[role="alert"]').hide();
    }
);