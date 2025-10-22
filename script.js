const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []; // secuencia que genera el juego
let userClickedPattern = []; // secuencia que va el usuario
let started = false; // si el juego inició
let level = 0; 
document.addEventListener("keydown", () => {
if (!started) {
level = 0;
gamePattern = [];
started = true;
nextSequence(); // empieza la primera secuencia
document.getElementById("level-title").textContent = "Nivel " +
level;
}
});

document.querySelectorAll(".btn").forEach(btn => {
btn.addEventListener("click", function() {
const userChosenColor = this.id; // id debe ser
'red','blue','green','yellow'
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length - 1);
});
});

function nextSequence() {
userClickedPattern = []; // reinicia la secuencia del usuario
level++;
document.getElementById("level-title").textContent = "Nivel " +
level;
const randomNumber = Math.floor(Math.random() * 4);
const randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
// muestra la animación y sonido del color añadido
const btn = document.getElementById(randomChosenColor);
btn.classList.add("pressed");
playSound(randomChosenColor);
setTimeout(() => btn.classList.remove("pressed"), 300);
}

function checkAnswer(currentIndex) {
if (gamePattern[currentIndex] ===
userClickedPattern[currentIndex]) {
// si el usuario completó la secuencia correctamente
if (userClickedPattern.length === gamePattern.length) {
setTimeout(() => nextSequence(), 1000);
}

} else {
// error: reproducir sonido y mostrar efecto de 'game over'
playSound("wrong");
document.body.classList.add("game-over");
document.getElementById("level-title").textContent = "¡Perdiste!"
"Presiona una tecla para reiniciar";
setTimeout(() => document.body.classList.remove("game-over"),
200);
startOver();
}

}function startOver() {
level = 0;
gamePattern = [];
started = false;
userClickedPattern = [];
}

function playSound(name) {
const sounds = {
red: new
Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
blue: new
Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
green: new
Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
yellow: new
Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
wrong: new
Audio("https://s3.amazonaws.com/adam-recvlohe-sounds/error.mp3")
};
sounds[name].play();
}

function animatePress(color) {
const btn = document.getElementById(color);
btn.classList.add("pressed");
setTimeout(() => btn.classList.remove("pressed"), 200);
}
