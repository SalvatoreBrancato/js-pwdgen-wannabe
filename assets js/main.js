let nome = prompt("Qual'è il tuo nome?");
let cognome = prompt("Qual'è il tuo cognome?");
let colorePreferito = prompt("Qual'è il tuo colore preferito?");

console.log(nome+cognome+colorePreferito+21);

document.getElementById("nome").innerHTML =`Il tuo nome è <span>${nome}</span>` ;
document.getElementById("cognome").innerHTML = `Il tuo cognome è <span>${cognome}</span>`;
document.getElementById("colore-preferito").innerHTML = `ll tuo colore preferito è ${colorePreferito}`;

document.getElementById("password-insicura").innerHTML = `La tua password insicurissima suggerita è <b class="password-insicura">${nome+cognome+colorePreferito+21}</b>`;

document.getElementById("password-sicura").innerHTML = `La tua password sicura suggerita è <b class="password-sicura">${nome}ask!@${cognome}yzk/${colorePreferito}$££%&/()</b>`;