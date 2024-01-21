let input = document.querySelector('input');
let button = document.querySelector('button');
let ansContainer = document.querySelector('#ans-container');

let motpoème = "Sous l'éclat des cieux, le grand jeté s'éveille, corps gracieux, légèreté qui m'émerveille. Ces ailes si soyeuses battent en douce cadence, s'envolent vers l'infini en achevant son ascendance. Ce mouvement contrôlé dévoile sa magie insoupçonnée. Comme le soleil aux aurores ou une étoile filante. La souplesse se tisse dans chaque instants, Une chorégraphie, un ballet resplendissant. Sur la scène de l'aube, le rêve prend son essor, l'âme du danseur s'élève, libérée de son corps. Les muscles se contractent et se déploient, ressentent tout comme la première fois. Le grand Jeté, éternel symbole de liberté, s'achève en équilibre entre peur et fierté. Chaque saut présente un voyage, une prière, une ode à la beauté, à la danse, à l'éphémère.";
const motPeinture = "./paint.jpeg";
const motSong = "./video.mp4";

let header = document.querySelector('header');
header.style.opacity = 1;

let username = "ColineGPT";

let answers = [
    "Il semble que vous ayez mentionné le grand jeté, comment voulez-vous que je vous montre ce que c'est ?",
    `Voici un poème à propos du grand jeté :\n${motpoème}`,
    `Voici un dessin du grand jeté : `,
    `Voici une musique faisant référence au grand jeté :`,
    "Bonjour, comment puis-je vous aider ?",
    "Je suis ravi de vous aider ! Si vous avez d'autres questions ou si vous avez besoin d'aide pour autre chose, n'hésitez pas à demander !",
    "Mmh, je ne comprends pas ce que vous voulez dire par là, pouvez-vous reformuler ?"
];

let lastAnswerIndex = answers.length - 1;

button.addEventListener('click', (event) => {
    event.preventDefault();
    header.style.opacity = 0;
    let text = input.value.toLowerCase();

    let lineBreak1 = document.createElement('div');
    lineBreak1.style.margin = '0';
    ansContainer.appendChild(lineBreak1);

    let youDiv = document.createElement('div');
    youDiv.style.fontWeight = 'bold';
    youDiv.textContent = "Vous";
    youDiv.style.fontFamily = 'monospace';
    ansContainer.appendChild(youDiv);

    let lineBreak2 = document.createElement('div');
    lineBreak2.style.margin = '0';
    ansContainer.appendChild(lineBreak2);

    let userTextDiv = document.createElement('div');
    userTextDiv.textContent = text;
    userTextDiv.style.fontFamily = 'ubuntu';
    ansContainer.appendChild(userTextDiv);

    let lineBreak3 = document.createElement('div');
    lineBreak3.style.margin = '10px';
    ansContainer.appendChild(lineBreak3);

    let colineDiv = document.createElement('div');
    colineDiv.style.fontWeight = 'bold';
    colineDiv.style.opacity = 0;
    colineDiv.style.fontFamily = 'monospace';
    colineDiv.textContent = username;
    ansContainer.appendChild(colineDiv);

    setTimeout(() => {
        colineDiv.style.opacity = 1;

        let lineBreak4 = document.createElement('div');
        lineBreak4.style.margin = '10px';
        ansContainer.appendChild(lineBreak4);
    }, 800);

    let answerIndex = lastAnswerIndex;

    if (text.includes("grand jete") && (text.includes("poème") || text.includes("poeme"))) {
        answerIndex = 1;
    } else if (text.includes("poeme") || text.includes("poème")) {
        answerIndex = 1;
    } else if (text.includes("grand jete") && (text.includes("peinture") || text.includes("tableau") || text.includes("image"))) {
        answerIndex = 2;
    } else if (text.includes("dessin") || text.includes("tableau") || text.includes("image")) {
        answerIndex = 2;
    } else if (text.includes("grand jete") && (text.includes("musique") || text.includes("chanson") || text.includes("song"))) {
        answerIndex = 3;
    } else if (text.includes("musique") || text.includes("chanson") || text.includes("song")) {
        answerIndex = 3;
    } else if (text.includes("grand jeté") || text.includes("grand jete")) {
        answerIndex = 0;
    } else if (text.includes("clear") || text.includes("effacer") || text.includes("vider")) {
        ansContainer.innerHTML = '';
        input.value = '';
        return;
    } else if (text.includes("hello") || text.includes("bonjour") || text.includes("salut") || text.includes("coucou")) {
        answerIndex = 4;
    } else if (text.includes("merci") || text.includes("cimer") || text.includes("thx") || text.includes("gracias")) {
        answerIndex = 5;
    }

    function typeWriter(index, speed, targetDiv) {
        if (index < answers[answerIndex].length) {
            targetDiv.innerHTML += answers[answerIndex].charAt(index);
            setTimeout(() => {
                typeWriter(index + 1, speed, targetDiv);
            }, speed);
        }
    }

    let typingEffect = document.createElement('div');
    typingEffect.style.fontFamily = 'ubuntu';
    ansContainer.appendChild(typingEffect);

    setTimeout(() => {
        if (answerIndex === 3) {
            typeWriter(0, 45, typingEffect);
            setTimeout(() => {
                let videoElement = document.createElement('video');
                videoElement.setAttribute('src', motSong);
                videoElement.setAttribute('controls', 'controls');
                videoElement.style.height = '50%';
                ansContainer.appendChild(videoElement);
            }, 3000);
        } else if (answerIndex === 2) {
                typeWriter(0, 45, typingEffect);
                setTimeout(() => {
                    let imageElement = document.createElement('img');
                    imageElement.setAttribute('src', motPeinture);
                    imageElement.style.height = '70%';
                    ansContainer.appendChild(imageElement);
                }, 3000);
        } else {
            typeWriter(0, 45, typingEffect);
        }
    }, 1200);

    input.value = '';
});
