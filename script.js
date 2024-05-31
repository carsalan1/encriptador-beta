function validateInput() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;

    const containsUpperCase = /[A-Z]/.test(inputText);
    const containsSpecialChars = /[^\w\s]/.test(inputText);
    const errorMessageElement = document.getElementById('errorMessage');

    if (containsUpperCase || containsSpecialChars) {
        // Muestra mensaje de error en negrita, cursiva y tamaño 20px
        errorMessageElement.innerHTML = '<b><i style="font-size:20px; color: red;">Error:</i></b> ';

        if (containsUpperCase) {
            errorMessageElement.innerHTML += 'Solo se permiten letras minúsculas.';
        }

        if (containsSpecialChars) {
            if (containsUpperCase) {
                errorMessageElement.innerHTML += '<br>';
            }
            errorMessageElement.innerHTML += 'No se permiten acentos ni caracteres especiales.';
        }

        // Restablece el mensaje original después de 4 segundos
        setTimeout(() => {
            errorMessageElement.innerHTML = '';
        }, 3000);

        // Limpia el contenido del área de texto solo cuando hay errores
        inputTextElement.value = '';
    } else {
        // Restaura el mensaje original si no hay errores
        errorMessageElement.innerHTML = '';
    }
}

function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const containsSpecialChars = /[^\w\s]/.test(inputText);

    if (containsSpecialChars) {
        alert('No se permiten acentos ni caracteres especiales.');
        return;
    }

    const result = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').value = result;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const containsSpecialChars = /[^\w\s]/.test(inputText);

    if (containsSpecialChars) {
        alert('No se permiten acentos ni caracteres especiales.');
        return;
    }

    const result = inputText
        .replace(/\bufat\b/g, 'u')
        .replace(/\bober\b/g, 'o')
        .replace(/\bai\b/g, 'a')
        .replace(/\bimes\b/g, 'i')
        .replace(/\benter\b/g, 'e');

    document.getElementById('outputText').value = result;
}

function containsSpecialCharacters(text) {
    return /[áéíóúüñÁÉÍÓÚÜÑ!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-=]/.test(text);
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();

    try {
        const successful = document.execCommand('copy');
        const message = successful ? 'Texto copiado al portapapeles' : 'Error al copiar el texto';
        alert(message);
    } catch (err) {
        console.error('Error al intentar copiar el texto', err);
    }

    // Deselecciona el texto después de copiarlo
    document.getSelection().removeAllRanges();
}
