"use strict"

let cdForm = document.getElementById('cd-form')
let deposit = document.getElementById('deposit')
let interestRate2 = document.getElementById('interest-rate2')
let years = document.getElementById('years')
let resultElement2 = document.getElementById('result2')


function onCalculate2 (event) {
    event.preventDefault() 
    
    let sum = Number(deposit.value) * Number(interestRate2.value) * Number(years.value)
    resultElement2.innerHTML = "<h4>" + sum + "</h4>"
    
    
}

cdForm.onsubmit = onCalculate2