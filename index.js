// variables que toman y muestran el texto encriptado/desencriptado
const textArea = document.querySelector(".textarea");
const outputArea = document.querySelector(".output-area");
const init = document.querySelector("#init");
const result = document.querySelector("#result"); //areas a hacer visibles o invisibles

//matriz con las llaves de encriptación
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncrypt(){
    if (textArea.value == "") { // si texto es vacio reacomodo el mensaje inicial
        result.classList.add("invisible"); 
        init.classList.remove("invisible"); 
        return;
    }
    const encryptedText = encrypt(textArea.value); //capturo el texto del input y lo encripto
    outputArea.value = encryptedText; //muestro el texto encriptado en el output
    textArea.value = "";

    init.classList.add("invisible"); //desaparece muñeco y texto
    result.classList.remove("invisible"); // aparece texto final y botón
};

function btnDecrypt(){
    if (textArea.value == "") { // si texto es vacio reacomodo el mensaje inicial
        result.classList.add("invisible"); 
        init.classList.remove("invisible"); 
        return;
    }
    const decryptedText = decrypt(textArea.value);
    outputArea.value = decryptedText;
    textArea.value = "";

    init.classList.add("invisible"); //desaparece muñeco y texto
    result.classList.remove("invisible"); // aparece texto final y botón
};

function btnCopy(){
    const text_output = document.querySelector("#text_output");
    navigator.clipboard.writeText(text_output.value);
    alert("Texto copiado!");
};

function encrypt(inputText){
    let encryptCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],    
    ];
    
    outputText = inputText.toLowerCase(); // lowercase no es necesario xq ya lo fuerzo en CSS

    for (let i = 0; i < encryptCode.length; i++) {
        if (outputText.includes(encryptCode[i][0])) {
            outputText = outputText.replaceAll(encryptCode[i][0], encryptCode[i][1])
        }
        
    };

    return outputText;
};

function decrypt(inputText){
    let encryptCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],    
    ];
    
    outputText = inputText.toLowerCase(); // lowercase no es necesario xq ya lo fuerzo en CSS

    for (let i = 0; i < encryptCode.length; i++) {
        if (outputText.includes(encryptCode[i][1])) {
            outputText = outputText.replaceAll(encryptCode[i][1], encryptCode[i][0])
        }
        
    };

    return outputText;
};

// console.table(encryptCode);