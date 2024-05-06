//Sélectionner 
const btnsDialogTrigger = document.querySelectorAll('button[data-dialog]'); //je déclare une variable qui strocke tous les éléments HTML de type button qui ont un attribut data-dialog
const dialogs = document.querySelectorAll('.dialog');//je déclare une variable qui sélectionnera tous les dialog de notre site

function closingDialog(e) {//la fonction a comme paramètre l'objet e qui est le contenu de l'événement
    const dialog = e.target//je déclare une variable qui fait référence à la cible de l'événement de dialog 

    dialog.removeAttribute('closing', '');//envèle la demande de cesser l'application de l'attribut closing, soit de fermer la modale,
    dialog.removeAttribute('open', '');//ferme dialog(la modale). Le site redeviendra accessible.

    dialog.removeEventListener('animationend', closingDialog);//enlève l'écouteur d'événement
}

function closeDialog(dialog) {//Fonction closeDialog pour contrer le problème de fermeture de la modale sans fadeOut
    dialog.setAttribute('closing', '');//on set un nouvel attribut à dialog (la modale), soit de se fermer qui agira seul
    dialog.addEventListener('animationend', closingDialog);
}//sur l'écoute de la fin de l'animation (pas besoin de paramètre dans closingDialog, car c'est une call back et que le e(événement) est dans la déclaration de la fonction)

btnsDialogTrigger.forEach((btn) => {//On boucle à travers un tableau puisque btnsDialogTRigger représente plusieurs éléments HTML qu'il faut appeler les uns après les autres. La méthode .forEach nous passera les éléments actuels de la boucle en paramètre, nous, c'est les boutons, donc btn, .forEach((btn) =>
    btn.addEventListener('click', () => {//Ecoute de l'événement
        const dialogSelector = btn.getAttribute('data-dialog'); //je déclare une variable qui stocke tous les éléments data-dialog. Avec getAttribute, je pointe vers les éléments qui ont l'attribut data-dialog
        const dialog = document.querySelector(dialogSelector);//je déclare une variable qui crée mon dialogue en stockant les dialogSelector 

        //je vérifie que dialog existe. Si oui, on exécute le code, sinon, on ne l'exécute pas.
        if(dialog){
            if(dialog.checkVisibility()){//on valide l'état de notre ouverture/fermeture de notre modale avec checkVisibilité qui est de type booléen, donc true or false. Si elle est ouverte elle fermera. Remove open attribute
                closeDialog(dialog);
            }
            else{
                dialog.setAttribute('open', '');//Sinon, on ouvre, set open attribute
            }
            //on modifie la valeur d'un attribut, soit ouvrir la modale puisqu'elle est fermée à priori. setAttribut oblige de mettre une valeur (=rien) à notre paramètre no 2 qu'on laisse vide après open pour notre usage.
        }  
    });
});

//La modale fermera dès qu'on clique sur l'overlay et son contenu
dialogs.forEach(dialog => {//je boucle dans tous les dialogs possible
    dialog.addEventListener('click', () => {
        closeDialog(dialog);//La modale fermera. Remove open attribute
    });

    //je vais lui dire ne ne pas avoir ce comportement sur les éléments de la modale, de les exclure. Seulement fermer au clic de l'overlay. Ceux-ci doivent se comporter naturellement pour que l'utilisateur puisse cliquer sur les hyperlien et intéragir avec le contenu de la modale.
    const childrens = dialog.querySelectorAll('& > *');//je déclare une variables qui pointe vers tous (* représente tout) les enfants de dialog (notre modale)

    childrens.forEach(children => {//je boucle au travers du tableau ce la variable chidrens
        children.addEventListener('click', e => {//écoute du bouton à l'aide du e, soit l'objet de l'event element
            e.stopImmediatePropagation();//e devrait fermer, mais non, ne le fait pas!
        });
    })

    /*console.log(childrens);*/
});






