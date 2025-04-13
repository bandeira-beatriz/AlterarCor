const cores = ["#2ecc71", "#e67e22", "#9b59b6", "#1abc9c"];
let indice = 0;
let indice1 = 0;

function alterarCor(){
    document.body.style.background = cores[indice];
    indice = (indice + 3) % cores.length;
    indice1 = (indice1 - 1 + cores.length) % cores.length;
    document.querySelector('button').style.background = cores[indice1];
}