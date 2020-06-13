const output = document.getElementById("output");
const preview = document.getElementById("preview");
const multiplication = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const sum = document.getElementById("sum");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");

let valueA = 0;
let valueB = 0;
let operator;

const input = (element) => {
    preview.textContent = preview.textContent + element;
    if ((element != '*') && (element != '/') && (element != '+') && (element != '-')) {
    output.textContent = output.textContent + element;
    }
}

reset.onclick = () => {
    preview.textContent = "";
    output.textContent = "" ;
    valueA = 0;
    valueB = 0;
    operator = "";
};

const clearOutput = () => {
    output.textContent = "" ;
};

const blockOperators = () => {
    multiplication.disabled = true;
    subtraction.disabled = true;
    sum.disabled = true;
    division.disabled = true;
}

const unblockOperators = () => {
    multiplication.disabled = false;
    subtraction.disabled = false;
    sum.disabled = false;
    division.disabled = false;
}

multiplication.onclick = () => {
    preview.textContent = preview.textContent + '*';
    valueA = output.textContent;
    operator = '*';
    clearOutput();
    blockOperators();
};

subtraction.onclick = () => {
    preview.textContent = preview.textContent + '-';
    valueA = output.textContent;
    operator = '-';
    clearOutput();
    blockOperators();
};

sum.onclick = () => {
    preview.textContent = preview.textContent + '+';
    valueA = output.textContent;
    operator = '+';
    clearOutput();
    blockOperators();
};

division.onclick = () => {
    preview.textContent = preview.textContent + '/';
    valueA = output.textContent;
    operator = '/';
    clearOutput();
    blockOperators();
};

const calculate = () => {

    let result = 0;
    switch(operator) {
        case '*':
            result = valueA * valueB;
            break;
        case '-':
            result = valueA - valueB;
            break;
        case '+':
            result = Number(valueA) + Number(valueB);
            break;
        case '/':
            result = valueA / valueB;
            break;
        default:
            console.log('error');
    }

    if (result === Infinity) {
        output.textContent = 'Error';
    } else {
    output.textContent = result;
    }
}; 

equal.onclick = () => {
    valueB = output.textContent;
    preview.textContent = "";
    calculate();
    unblockOperators();
};


