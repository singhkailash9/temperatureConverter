//CTK= x+273.15;
//CTF= (x*9/5) + 32;
//KTC= x-273.15;
//KTF= (x - 273.15) * 9/5 + 32;
//FTC= (x - 32) * 5/9;
//FTK= (x - 32) * 5/9 + 273.15;

function CTK (input){
    input= eval(input);
    output=input+273.15;
    document.querySelector('#output').innerText=`${input} °C = ${output} K`;
    return (input+273.15);
}
function CTF (input){
    input= eval(input);
    output=(input*9/5) + 32;
    document.querySelector('#output').innerText=`${input} °C = ${output} F`;
    return (output);
}
function KTC (input){
    input= eval(input);
    output=input-273.15;
    document.querySelector('#output').innerText=`${input} K = ${output} °C`;
    return (output);
}
function KTF (input){
    input= eval(input);
    output=(input - 273.15) * 9/5 + 32;
    document.querySelector('#output').innerText=`${input} K = ${output} F`;
    return (output);
}
function FTC (input){
    input= eval(input);
    output=(input - 32) * 5/9;
    document.querySelector('#output').innerText=`${input} F = ${output} °C`;
    return (output);
}
function FTK (input){
    input= eval(input);
    output=(input - 32) * 5/9 + 273.15;
    document.querySelector('#output').innerText=`${input} F = ${output} K`;
    return (output);
}

function getdata(){  
    const select = document.getElementById("conversion");
    let input=document.getElementById("userinput").value;
    if(input=== ''){
        alert("Enter a value")
    }
        else{
            if (select.value === "Celsius to Kelvin") {
                CTK(input);
              } else if(select.value === "Celsius to Fahrenheit") {
                CTF(input);
              }else if(select.value === "Kelvin to Celsius") {
                KTC(input);
              }else if(select.value === "Kelvin to Fahrenheit") {
                KTF(input);
              } else if (select.value === "Fahrenheit to Celsius") {
                FTC(input);
              }else if (select.value === "Fahrenheit to Kelvin") {
                FTK(input);
              } else{
                alert("Select an option")
              }
        }
}  