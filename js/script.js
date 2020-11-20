// Il computer dev e generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
var arrayPc = [];

function numberPc() {

  for (var i = 0; i < 16; i++) {
    var numberPc = Math.floor(Math.random() * 100) + 1;
    var notPush = false;

    for (var z = 0; z < arrayPc.length; z++) {

      if (numberPc == arrayPc[z]) {
        notPush = true;
        i--;
      }
    }

    if (notPush == false) {
      arrayPc.push(numberPc);
    }
  }

  return arrayPc;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
var arrayUser = [];

function numberUser(volta) {

  for (var i = 0; i < 1; i++) {
    var numberUser = parseInt(prompt("Inserisci un numero tra 1 e 100 (" + volta++ + ")"));
    var notPush = false;

    if(!(isNaN(numberUser)) && numberUser > 0 && numberUser < 100) {
      for (var z = 0; z < arrayUser.length; z++) {

        if (numberUser == arrayUser[z]) {
          alert("i numeri non possono essere duplicati ritenta!");
          notPush = true;
          i--;
        }
      }

      if (notPush == false) {
        arrayUser.push(numberUser);
      }
    } else {
      alert("numero inserito non valido riprova!");
      i--;
    }

  }

  return numberUser;
}

// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
function checkNumber() {
  console.log(numberPc());
  var score = document.getElementById("punteggio");
  var winAndLoseElement = document.getElementById("winAndLoseElement");

  for (var i = 0; i < 84; i++) {
    var punteggio = "Punteggio: " + i;
    var numeroUtente = numberUser(i);

    for (var z = 0; z < arrayPc.length; z++) {
      if (numeroUtente == arrayPc[z]) {
        score.innerHTML = punteggio;
        winAndLoseElement.innerHTML = "hai perso, il numero inserito non è valido!";
        winAndLoseElement.className = "red";
        return "perso";
      }
    }

    if(i == 84) {
      score.innerHTML = punteggio;
      winAndLoseElement.innerHTML = "complimenti, hai vinto!";
      winAndLoseElement.className = "green";
      return "vinto";
    }
  }
}

var game = checkNumber();
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
