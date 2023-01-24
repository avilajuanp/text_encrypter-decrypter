// variables que toman y muestran el texto encriptado/desencriptado
const textArea = document.querySelector(".textarea");
const outputArea = document.querySelector(".output-area");

//matriz con las llaves de encriptación
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncrypt(){
    const encryptedText = encrypt(textArea.value); //capturo el texto del input y lo encripto
    outputArea.value = encryptedText; //muestro el texto encriptado en el output
    textArea.value = "";
    // outputArea.style.backgroundImage = "none";
};

function btnDecrypt(){
    const decryptedText = decrypt(textArea.value);
    outputArea.value = decryptedText;
    textArea.value = "";
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