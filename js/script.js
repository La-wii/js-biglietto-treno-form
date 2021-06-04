var submit = document.getElementById('submit');
submit.addEventListener("click", function(){

    // nome
    var nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById('nome-utente').innerHTML = nome;

    var km = document.getElementById('km').value;
    console.log(km);


    var prezzo = km * 0.21;
    console.log(prezzo);

    var eta = document.getElementById('eta');
    console.log(eta);

    var fascia = document.getElementById('fascia-eta').value;
    console.log(fascia);

});

var carrozza = Math.floor(Math.random()* 9) + 1;
document.getElementById("numero-carozza").innerHTML = carrozza;


var cp = Math.floor(Math.random()* 1000) + 9000;
console.log(cp);
document.getElementById("numero-cp").innerHTML = cp;

