//const painel = document.querySelector("painel")
const painel = document.getElementById("painel");
var array=[];
painel.disable = true;


function num(number){
   if(painel.disable === true){
    painel.value += number;
    array.push(number)
   }

}

function clean(){
    painel.value = "";
}

function del(){
   array.pop();
   painel.value = array.join('') //junta os elementos sem separar por vírgula 
   console.log(array)

}

function turn(){
    const liga = document.querySelector("#turn");

    if(painel.disable === false){
        painel.disable  = true;
        painel.style.opacity = 1;
    }
    else{
        painel.disable  = false;
        painel.value = ""
        painel.style.opacity = 0.3;
    }

    if(liga.style.backgroundColor == "red"){
        liga.style.backgroundColor = "green";
    }
    else{
        liga.style.backgroundColor = "red";
    }
}