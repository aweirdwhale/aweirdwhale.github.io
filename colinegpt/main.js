let input = document.querySelector('input');
let button = document.querySelector('button');
let ansContainer = document.querySelector('#ans-container');

// Utilisez des variables pour stocker les mots spécifiques
let motVideo = "video";
let motPeinture = "peinture";
let motSong = "son";

//get the header
let header = document.querySelector('header');

//set header opacity to 1
header.style.opacity = 1;


username = "ColineGPT";

answers = [
    "Il semble que vous ayez mentionné le grand jeté, comment voulez-vous que je vous montre ce que c'est ?",
    `Voici une vidéo du grand jeté : ${motVideo}`,
    `Voici une peinture du grand jeté : ${motPeinture}`,
    `Voici une musique faisant référence au grand jeté : ${motSong}`,
    "Bonjour, comment puis-je vous aider ?",
    "Je suis ravi de vous aider ! Si vous avez d'autres questions ou si vous avez besoin d'aide pour autre chose, n'hésitez pas à demander !",
    "Mmh, je ne comprends pas ce que vous voulez dire par là, pouvez-vous reformuler ?"
];

let lastAnswerIndex = answers.length - 1;  // Index of the last answer

button.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    //hide the header
    header.style.opacity = 0;

    // Get the value of the input
    let text = input.value.toLowerCase();  // Convert to lowercase for case-insensitive comparison

    // Add a line break with reduced size
    let lineBreak1 = document.createElement('div');
    lineBreak1.style.margin = '0'; // Reduce the margin
    ansContainer.appendChild(lineBreak1);

    // Create a new div element for "Vous" (You)
    let youDiv = document.createElement('div');
    youDiv.style.fontWeight = 'bold'; // Make it bold
    youDiv.textContent = "Vous";
    youDiv.style.fontFamily = 'monospace'; // Use a monospace font
    ansContainer.appendChild(youDiv);

    // Add a line break with reduced size
    let lineBreak2 = document.createElement('div');
    lineBreak2.style.margin = '0'; // Reduce the margin
    ansContainer.appendChild(lineBreak2);

    // Create a new div element for the user's text
    let userTextDiv = document.createElement('div');
    userTextDiv.textContent = text;
    userTextDiv.style.fontFamily = 'ubuntu'; // Use a monospace font
    ansContainer.appendChild(userTextDiv);

    // Add a line break with reduced size
    let lineBreak3 = document.createElement('div');
    lineBreak3.style.margin = '10px'; // Reduce the margin
    ansContainer.appendChild(lineBreak3);

    // Create a new div element for "ColineGPT" (user name)
    let colineDiv = document.createElement('div');
    colineDiv.style.fontWeight = 'bold'; // Make it bold
    colineDiv.style.opacity = 0;
    colineDiv.style.fontFamily = 'monospace'; // Use a monospace font
    colineDiv.textContent = username;
    ansContainer.appendChild(colineDiv);

    setTimeout(() => {
        colineDiv.style.opacity = 1;

        let lineBreak4 = document.createElement('div');
        lineBreak4.style.margin = '10px'; // Reduce the margin
        ansContainer.appendChild(lineBreak4);
    }, 800);

    

    // Find the appropriate answer index based on the input
    let answerIndex = lastAnswerIndex;

    if (text.includes("grand jete") && (text.includes("video") || text.includes("vidéo"))) {
        answerIndex = 1;
    } else if (text.includes("video") || text.includes("vidéo")) {
        answerIndex = 1;
    }   else if (text.includes("grand jete") && (text.includes("peinture") || text.includes("tableau") || text.includes("image"))) {
        answerIndex = 2;
    } else if (text.includes("peinture") || text.includes("tableau") || text.includes("image")) {
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

    // Function to simulate typing effect
    function typeWriter(index, speed, targetDiv) {
        if (index < answers[answerIndex].length) {
            targetDiv.innerHTML += answers[answerIndex].charAt(index);
            setTimeout(() => {
                typeWriter(index + 1, speed, targetDiv);
            }, speed);
        }
    }

    // Create a new div element for the typing effect
    let typingEffect = document.createElement('div');
    typingEffect.style.fontFamily = 'ubuntu'; // Use a monospace font

    ansContainer.appendChild(typingEffect);

    // Type out the response with the typing effect
    setTimeout(() => {
        typeWriter(0, 45, typingEffect); // Adjust the speed if needed
    }, 1200); // 1000 milliseconds (1 second) delay

    // Clear the input
    input.value = '';
});
