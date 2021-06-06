var submit = document.getElementById('submit');
submit.addEventListener("click", function(){

    // nome
    var nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById("nome-utente").innerHTML = nome;
    

    // km
    var km = document.getElementById('km').value;
    console.log(km);

    // prezzo
    var prezzo = km * 0.21;
    // console.log(prezzo);

    // eta
    var eta = document.getElementById('fascia-eta').value;
    console.log(eta);

    
    for (var i = 0; i < 2; i++) {
        if (eta == "over65"){
            // prezzo = prezzo * 0.6;
            prezzo = km * 0.21 * 60 / 100
            console.log(prezzo);      
        } else if (eta == "minorenne"){
            // prezzo = prezzo * 0.8;
            prezzo = km * 0.21 * 80 / 100
            console.log(prezzo);
        }
        
    }
   

    document.getElementById("costo-biglietto").innerHTML = prezzo.toFixed(2);
    
    var fascia = document.getElementById('fascia-eta').value;
    document.getElementById("scopri-offerta").innerHTML = fascia;

    var carrozza = Math.floor(Math.random()* 9) + 1;
    document.getElementById("numero-carozza").innerHTML = carrozza;


    var cp = Math.floor(Math.random() * 10000) + 90000;
    // console.log(cp);
    document.getElementById("numero-cp").innerHTML = cp;

});


document.getElementById("delete").addEventListener("click", function() {
    document.getElementById("ticket-title").classList.add("d-none");
    document.getElementById("ticket").classList.add("d-none");
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
});
