var canvas = new fabric.Canvas('myCanvas')

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {

	fabric.Image.fromURL("jogador.png", function (Img) {

		playerObject = Img;
		playerObject.scaleToWidth(150);
		playerObject.scaleToHeight(140);
		playerObject.set({
			top: playerY,
			left: playerX
		});

		canvas.add(playerObject);

	})
}

function newImage(imagemBloco) {
	fabric.Image.fromURL(imagemBloco, function (Img) {

		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top: playerY,
			left: playerX
		});

		canvas.add(blockImageObject);

	})
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	numero = e.keyCode;
	console.log(numero);


	
	
	if(e.shiftKey == true && numero == '77'){
console.log("p e shift presionadas juntas");

blockImageWidth = blockImageWidth + 10;
blockImageWidth = blockImageWidth + 10;
document.getElementById("currentWidth").innerHTML = blockImageWidth
document.getElementById("currentHeight").innerHTML = blockImageHeight
	
}

if(e.shiftKey == true && numero == '76'){
	console.log("p e shift presionadas juntas");
	
	blockImageWidth = blockImageWidth - 10;
	blockImageWidth = blockImageWidth - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth
	document.getElementById("currentHeight").innerHTML = blockImageHeight
		
	}
	
	
	if (numero == '77') {
		//m
		newImage("madeira_tronco.jpg")
	}

	if (numero == '84') {
		//t
		newImage("telhado.jpg")

	}

	if (numero == '67') {
		//c
		newImage("nuvem.jpg")

	}

	if (numero == '80') {
		//p
		newImage("unico.jpg")

	}

	if (numero == '71') {
		//g
		newImage("grama.png")

	}

	if (numero == '73') {
		//i
		newImage("parede_amarela.png")

	}

	if (numero == '87') {
		//w
		newImage("parede.jpg")

	}

	if (numero == '68') {
		//d
		newImage("verde_claro.png")

	}

	if (numero == '85') {
		//u
		newImage("verde_escuro.png")

	}
if(numero == '38'){
up();

}
if(numero == '40'){
down();
}

if(numero == '37'){
left()
}
if(numero =='39'){
right()
}
}

function right(){

if(playerX <= 870){
	playerX = playerX + blockImageWidth;
canvas.remove(playerObject);
playerUpdate();
}
}

function left(){

	if(playerX >= 0){
		playerX = playerX - blockImageWidth;
	canvas.remove(playerObject);
	playerUpdate();
	}
	}

	function down(){

		if(playerY <= 550){
			playerY = playerY + blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();
		}
		}
		
		function up(){

			if(playerY >= 0){
				playerY = playerY - blockImageWidth;
			canvas.remove(playerObject);
			playerUpdate();
			}
			}