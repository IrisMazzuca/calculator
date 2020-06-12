const output = document.getElementById("output");
const preview = document.getElementById("preview");
const multiplication = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const sum = document.getElementById("sum");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");

let valueA;
let valueB;
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
    valueA = "";
    valueB = "";
    operator = "";
};

const clearOutput = () => {
    output.textContent = "" ;
};

multiplication.onclick = () => {
    preview.textContent = preview.textContent + '*';
    valueA = output.textContent;
    operator = '*';
    clearOutput();
};

subtraction.onclick = () => {
    preview.textContent = preview.textContent + '-';
    valueA = output.textContent;
    operator = '-';
    clearOutput();
};

sum.onclick = () => {
    preview.textContent = preview.textContent + '+';
    valueA = output.textContent;
    operator = '+';
    clearOutput();
};

division.onclick = () => {
    preview.textContent = preview.textContent + '/';
    valueA = output.textContent;
    operator = '/';
    clearOutput();
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
    output.textContent = result;
}; 


equal.onclick = () => {
    valueB = output.textContent;
    preview.textContent = "";
    calculate();
};


