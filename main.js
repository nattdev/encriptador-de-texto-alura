let texto_encriptar;
let texto_encriptado;

let entradaTexto = document.getElementById("entrada-texto");
let salidaTexto = document.getElementById("salida-texto");
let notFoundMessage = document.getElementById("not-found");

let encriptButton = document.getElementById("encriptar-btn");
let desencriptButton = document.getElementById("desencriptar-btn");
let copyButton = document.getElementById("copy-btn");

encriptButton.addEventListener("click", () => {
	texto_encriptado = encriptar(entradaTexto.value);
	salidaTexto.value = texto_encriptado;
	if (entradaTexto.value !== ""){
		notFoundMessage.classList.add("invisible");
		salidaTexto.classList.add("visible");
	}
});
desencriptButton.addEventListener("click", () => {
	texto_desencriptado = desencriptar(entradaTexto.value);
	salidaTexto.value = texto_desencriptado;
});

copyButton.addEventListener("click", () => {
	copyToClipboard();

});

//Copy To the clipboard

function copyToClipboard() {
	salidaTexto.select();
	document.execCommand("copy");
	console.log("copiar");
}



// Encriptador
function encriptar (texto) {
	let textoDesencriptado = texto.split("");
	let letter;
	let textoEncriptado = "";

	for (let i = 0; i  < textoDesencriptado.length; i++) {
		letter = textoDesencriptado[i];
		console.log(letter);
		console.log(typeof(letter));
		switch (letter) {
			case "a":
				textoDesencriptado[i] = "ai";
				break;
			case "e":
				textoDesencriptado[i] = "enter";
				break;
			case "i":
				textoDesencriptado[i] = "imes";
				break;
			case "o":
				textoDesencriptado[i] = "ober";
				break;
			case "u":
				textoDesencriptado[i] = "ufat";
				break;
		}
		textoEncriptado += textoDesencriptado[i];
	}
	return textoEncriptado;
}

//Desencriptar
function desencriptar (texto) {
	let textoEncriptado = texto;
	let textoDesencriptado = "";

	let coincidencias = ["ai", "enter", "imes", "ober", "ufat"];
	let revertir = ["a", "e", "i", "o", "u"]

	for (let i = 0; i < revertir.length; i++) {
		textoEncriptado	= textoEncriptado.replaceAll(coincidencias[i], revertir[i]);
	}

	textoDesencriptado = textoEncriptado;
	return textoDesencriptado;

}






