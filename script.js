document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    displayOutput(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    displayOutput(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    navigator.clipboard.writeText(outputText.innerText).then(() => {
        var range = document.createRange();
        range.selectNodeContents(outputText);
        
        // Obtener el objeto de selección y añade el rango
        var selection = window.getSelection();
        selection.removeAllRanges(); // Limpia cualquier selección previa
        selection.addRange(range);
    });
});

function encryptText(text) {
    let rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => rules[match]);
}

function decryptText(text) {
    let rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}

function displayOutput(text) {
    let outputText = document.getElementById('output-text');
    let outputTextIngrese = document.getElementById('output-text-ingresetext');
    let outputImage = document.getElementById('output-image');
    let copyBtn = document.getElementById('copy-btn');

    if (text.trim() === "") {
        outputImage.style.display = "block";
        outputText.style.display = "block";
        outputTextIngrese.style.display = "block";
        copyBtn.style.display = "none";
        outputText.innerHTML = "Ningún mensaje fue encontrado.<br>";
        outputTextIngrese.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
    } else {
        outputImage.style.display = "none";
        outputTextIngrese.style.display = "none";
        outputText.style.display = "block";
        outputText.style.textAlign = "left";
        copyBtn.style.display = "inline-block";
        outputText.innerText = text;
        outputTextIngrese.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
    }
}
