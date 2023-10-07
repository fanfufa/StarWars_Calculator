function fundo(){
    var fundo = document.body // atribui o body do html à uma variavel 
    if(document.querySelector('#mode').value == 0){
        document.querySelector("body").style.backgroundColor = 'blue';
    }
    else{
        document.querySelector('body').style.backgroundColor = 'green';
    }

}