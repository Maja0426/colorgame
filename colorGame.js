var difficulties = 6;
var color = [];
var goalColor = [];
var gameColor = [];
var randomColor = [];
var randomBox = [];
var container = document.querySelector(".container");
var newGame = document.querySelector("#newGame");
var easyGame = document.querySelector("#easyGame");
var hardGame = document.querySelector("#hardGame");
var mainTitle = document.querySelector("#mainTitle");
var goalRgb = document.querySelectorAll("h1 span");
var tryAgain = document.querySelector("#tryAgain");
var box = document.querySelectorAll(".colorBox");
var title = document.querySelector("h1");
var subTitle = document.querySelectorAll("h3");
var easy = false;
var clickOn = true;

init();

function init() {
	randomBoxes();
	display();
	start();
	goodbox();
}

function randomBoxes() {
	if (easy === true) {
		difficulties = 3;
	} else {
		difficulties = 6;
	}
	for (var i = 0; i < difficulties; i++) {
		for (var x = 0; x < 3; x++) {
			randomColor[x] = Math.floor((Math.random() * 255) + 1);
		}
		randomBox[i] = randomColor;
		randomColor = [];
	}
	goalColor = Math.floor((Math.random() * difficulties));
	for (var i = 0; i < difficulties; i++) {
		color[i] = "rgb(" + randomBox[i][0] + ", " + randomBox[i][1] + ", " + randomBox[i][2] + ")";
	}
}

function display() {
	for (i = 0; i < difficulties; i++) {
		box[i].style.backgroundColor = color[i];
	}
}

function goodbox() {
	
	for (i = 0; i < difficulties; i++) {
		box[i].addEventListener("click", function () {
			if (clickOn === true) {
			if (this.style.backgroundColor === color[goalColor]) {
				mainTitle.style.backgroundColor = color[goalColor];
				title.textContent = "CONGRATULATION!!";
				subTitle[1].textContent = "You Win!";
				tryAgain.textContent = "Good Work!";
				newGame.textContent = "Play Again?";
				for (i = 0; i < difficulties; i++) {
					box[i].style.backgroundColor = color[goalColor];
				}
				clickOn = false;
			} else {
				this.style.backgroundColor = "#343a40";
				tryAgain.textContent = "Try Again!!";
			}
		}
		});
	}
	return;
}


function start() {
	subTitle[1].textContent = "Game";
	newGame.textContent = "new colors";
	tryAgain.textContent = "";
	mainTitle.style.backgroundColor = "#17a2b8";
	title.textContent = color[goalColor];
	clickOn = true;
}

newGame.addEventListener("click", function () {
	init();
});

easyGame.addEventListener("click", function () {
	easyGame.classList.add("selected");
	hardGame.classList.remove("selected");
	container.style.margin = "6% auto";
	easy = true;
	for (var i = 3; i < 6; i++) {
		box[i].style.display = "none";
	}
	init();
});

hardGame.addEventListener("click", function () {
	hardGame.classList.add("selected");
	easyGame.classList.remove("selected");
	container.style.margin = "auto";
	easy = false;
	for (var i = 0; i < 6; i++) {
		box[i].style.display = "block";
	}
	init();
});
