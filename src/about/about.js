var heros = [ 
    "Nous sommes des élèves de spécialité nsi, on crée des projets parce qu'on aime vivre dangereusement (!!!!) et qu'on veut améliorer la vie des autres (quel altruisme !!!) En plus, ça rapporte des 20 facilement en nous faisant passer pour des génies. Notre dernier chef-d'œuvre c'est JDOcopilot, un petit bijou de technologie et d'optimisation. Ah, et Albatross parce qu'on est pas Baudelaire mais on compte avoir la même postérité !",
    "Olivier, une baleine bizarre mais si sexy... C’est un peu à cause de moi si les projets ou le site sont pas beaux : je suis developpeur front-end.",
    "Salut, moi c'est Cédric, alias Tidic. C'est moi le gars qui a toujours des galères avec son pc, qui ramène des erreurs ou les créer, venu de Mars ou de Micromégas. Je suis developpeur back-end à mi temps je crois.",
    "BONJOUR je suis CLAIRE caractéristiques : canard saucisse \n(elle est spéciale)",
    "Thomas.",
]
var images = [
    "../../assets/favicon.png",
    "http://jdocopilot.me/pps/28.jpg",
    "http://jdocopilot.me/pps/29.jpg",
    "http://jdocopilot.me/pps/4.jpg",
    "http://jdocopilot.me/pps/5.jpg",
];

// on affiche par défaut le premier item de la liste heros et images
var index = 0;
var hero = heros[index];
var imageSrc = images[index];

document.getElementById("mainP").innerHTML = hero;
image = document.getElementById('heroImg');
image.src = imageSrc;

// on définit une fonction qui va changer le texte et l'image au click de "next" en augmentant l'index de 1
function next() {
    index++;
    if (index >= heros.length) {
        index = 0;
    }
    hero = heros[index];
    imageSrc = images[index];
    document.getElementById("mainP").innerHTML = hero;
    image = document.getElementById('heroImg');
    image.src = imageSrc;
}

// on définit une fonction qui va changer le texte et l'image au click de "previous" en diminuant l'index de 1
function previous() {
    index--;
    if (index < 0) {
        index = heros.length - 1;
    }
    hero = heros[index];
    imageSrc = images[index];
    document.getElementById("mainP").innerHTML = hero;
    image = document.getElementById('heroImg');
    image.src = imageSrc;
}

//on regarde si les bouttons next ou previous sont cliqués et on appelle la fonction correspondante
document.getElementsByClassName('next')[0].addEventListener('click', next);
document.getElementsByClassName('previous')[0].addEventListener("click", previous);