//const painel = document.querySelector("painel")
const painel = document.getElementById("painel");


function num(number){
    painel.value += number;
}

function clean(){
    painel.value = "";
}