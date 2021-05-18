/* 
Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

*/
/* Event listerner per button Generate */
document
    .getElementById("generate_ticket_button")
    .addEventListener("click", function () {
        var nameInputEl = document.getElementById("name");
        var kmInputEl = document.getElementById("km");
        var ageGroupSelect = document.getElementById("age_group");
        var ticketEl = document.querySelector(".ticket");

        var fullPrice = kmInputEl.value * 0.21
        var discountText = "Prezzo Pieno";
        //sconti
        if (ageGroupSelect.value == "minorenne") {
            fullPrice -= fullPrice * 0.2;
            discountText = "Sconto Minorenne"
        } else if (ageGroupSelect.value == "over65") {
            fullPrice -= fullPrice * 0.4;
            discountText = "Sconto Senior"
        }

        ticketEl
        .insertAdjacentHTML("afterbegin",
        `
        <div><strong>Nome Passeggero:</strong> ${nameInputEl.value}</div>
        <div><strong>Offerta:</strong> ${discountText}</div>
        <div><strong>Carrozza:</strong> ${randomNumber(1, 9)}</div>
        <div><strong>Codice Cp:</strong> ${randomNumber(90000, 99999)}</div>
        <div><strong>Costo Biglietto:</strong> ${fullPrice.toFixed(2)}</div>
        `);
    })
/* Event listener al click del bottone cancel */
document
    .getElementById("cancel_ticket_button")
    .addEventListener("click", function () {
        document.getElementById("name").value= "";
        document.getElementById("km").value="";
        document.getElementById("age_group").value="";

    })



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}