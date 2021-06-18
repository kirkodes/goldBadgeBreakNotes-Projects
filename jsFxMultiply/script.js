const myHeader = document.querySelector('h1');
myHeader.textContent = 'Multiply Any 2 Numbers';

const mathButton = document.querySelector('button');

const section = document.querySelector('section');

let mathResult;

mathButton.addEventListener('click', multiplyNum);

function multiplyNum(e) {
e.preventDefault();

    const numberOne = document.querySelector('#mathNum1').value;
    const numberTwo = document.querySelector('#mathNum2').value;

    mathResult = numberOne * numberTwo;

    let resultDiv = document.createElement('div')
    let htmlResult = document.createElement('h2');
    htmlResult.textContent = mathResult
    section.appendChild(resultDiv)
    resultDiv.appendChild(htmlResult)
}

document.querySelector('html').onclick = function(){
    alert("Welcome to this multiplication function. Enter any 2 numbers to find their product!")
}