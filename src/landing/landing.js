const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,?;.:/!@#$%^&*()_+<>&é~#'{([-|è`_ç^à@)]=}";

const splashes = [
    "Alan Turing il est grave surcoté",
    "On est un peu mégalos mais ne vous inquiétez pas",
    "Kaneki sait faire un bon café !",
    "He had a vague sense that trees gave birth to dinosaurs",
    "HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    '?v=dQw4w9WgXcQ',
    "coeur coeur Ada <3",
    "Holy cow, man!",
    "That's no moon, it's a space station!",
    "10% bug free !"
]

let splash;
function randomSplash() {
    splash = Math.floor(Math.random() * splashes.length)
}

randomSplash();


document.getElementById("splash").innerHTML = splashes[splash];

document.getElementById("title").onmouseover = event => {
    let iterations = 0;
      
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
              if(index < iterations) {
                return event.target.dataset.value[index];
              }
      
              return letters[Math.floor(Math.random() * 67)]
            })
            .join("");
      
          if(iterations >= event.target.dataset.value.length){
            clearInterval(interval);
          }
      
          iterations += 1 / 3;
        }, 45);
}