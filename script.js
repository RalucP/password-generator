const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = ['!', '@', '#', '$', '%', '&', '^', '*', '(', ')', '[', ']', '{', '}', '/', '<', '>'];

const symbolsCheck = document.querySelector('#symbols');
const numbersCheck = document.querySelector('#numbers');
const lengthInput = document.querySelector('#numch');
const button = document.querySelector('#button');
const divs = document.querySelectorAll('.result-item');

function generate(){
    const includeSymbols = symbolsCheck.checked;
    const includeNumbers = numbersCheck.checked;
    const length = lengthInput.value;

    let charactersIncluded = alphabet;
    if(includeSymbols){
        charactersIncluded = charactersIncluded.concat(symbols)
    }
    if(includeNumbers){
        charactersIncluded = charactersIncluded.concat(numbers)
    }

    console.log(charactersIncluded)

    const passwords= [];

    for(let j = 0; j < 2; j++) {
        let password = '';
        for(let i = 0; i < length-1; i++){
            let position = Math.floor(Math.random() * charactersIncluded.length);
            password += charactersIncluded[position];
        }
        passwords.push(password)
    }

    displayPasswords(passwords);
}

function displayPasswords(pass){
    const passElement = document.querySelectorAll('.result-item input');
    
    for(let i = 0; i < pass.length; i++){
        passElement[i].value = pass[i];
    }
}

divs.forEach(element => {
    element.childNodes[3].addEventListener('pointerdown', (e) => {
        const text = e.target.parentNode.childNodes[1];

        text.select();
        text.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(text.value);
    })
});

button.addEventListener('pointerdown', generate);

generate();



