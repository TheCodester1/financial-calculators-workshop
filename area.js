"use strict"

let areaForm = document.getElementById('area-form')
let area = document.getElementById('area')
let resultElement3 = document.getElementById('result3')


function onCalculate3 (event) {
    event.preventDefault() 
    
    let sum = Number(area.value)**Number(2) 
    resultElement3.innerHTML = "<h4>" + sum + "</h4>"
    
    
}

areaForm.onsubmit = onCalculate3