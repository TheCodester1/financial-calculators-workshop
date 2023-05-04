"use strict"

console.log('are we active')

let mortgageForm = document.getElementById("mortgage-form")
let principal = document.getElementById('principal')
let interestRate = document.getElementById('interest-rate')
let loanLength = document.getElementById('loan-length')
let resultElement = document.getElementById('result')


function onCalculate (event) {
    event.preventDefault() 
    
    let sum = Number(principal.value) * Number(interestRate.value) * Number(loanLength.value)
    resultElement.innerHTML = "<h4>" + sum + "</h4>"
    /* string interpolation {}
    
resultElement.innerHTML = `<h4>
    The sum of ${inputX.value} and ${inputY.value} is ${sum}.
    </h4>
    `
    
    <details>
    <summary>Result</summary>
    The sum of ${inputX.value} and ${inputY.value} is ${sum}.
    </details>*/
 
}

mortgageForm.onsubmit = onCalculate





