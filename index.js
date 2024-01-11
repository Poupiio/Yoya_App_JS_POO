const main = document.querySelector('main');
let exerciseArray = [
    { pic: 0, min: 1 },
    { pic: 1, min: 1 },
    { pic: 2, min: 1 },
    { pic: 3, min: 1 },
    { pic: 4, min: 1 },
    { pic: 5, min: 1 },
    { pic: 6, min: 1 },
    { pic: 7, min: 1 },
    { pic: 8, min: 1 },
    { pic: 9, min: 1 },
];

class Exercise {

}

// Création d'un objet avec une fonction contenant la logique d'affichage du body de chaque page (h1, main, button)
const utils = {
    pageContent: function (title, content, btn) {
        document.querySelector('h1').innerHTML = title;
        main.innerHTML = content;
        document.querySelector('.btn-container').innerHTML = btn;
    }
};

// Création d'un objet pour gérer l'affichage des 3 pages => pas de rechargement de page
const page = {
    lobby: function() {
        utils.pageContent("Paramétrage : <i id='reboot' class='fas fa-undo'></i>", "Exercices", "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>");
    },

    routine: function() {
        utils.pageContent("Routine", "Exercice avec chrono", null);
    },

    finish: function() {
        utils.pageContent("C'est terminé !", "<button id='start'>Recommencer</button>", "<button id='reboot' class='btn-reboot'>Réinitiaiser <i class='fas fa-times-circle'></i></button>");
    }
}

page.lobby()
page.routine()
page.finish()