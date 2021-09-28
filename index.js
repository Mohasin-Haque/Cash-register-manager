const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashCheck = document.querySelector("#cash-check");
const tableDisplay = document.querySelector(".change-table");



cashCheck.style.display = "none";
tableDisplay.style.display = "none";

// var numberOfNotes;

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", billAmnt);
hideMessage();
checkButton.addEventListener("click", changeCalculater);
// hideMessage();

function billAmnt() {
    hideMessage();
    if (Number(billAmount.value) > 0) {
        cashCheck.style.display = "flex";
    }else if(billAmount.value === "") {
        showMessage("Enter the Bill Amount bawa");
     } else {
        showMessage("Enter positive number bidu. Apun ko Paisa do..😐");
    }
}


function changeCalculater() {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        tableDisplay.style.display = "block";
        hideMessage(); 
        const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
        calculateChange(amountToBeReturned);
        if (amountToBeReturned == 0) {
            showMessage("Paisa ho gya🙄 ...  Ab kya chahiye..🤨 ");
            tableDisplay.style.display = "none";
        }
    } else {
        tableDisplay.style.display = "none";
        showMessage("kya....Paisa Nhi h?? Chalo bartan manjo.😏");
    }
}

// function returnChange(amountToBeReturned){
//     for(let i = 0; i< availableNotes>length; i++){
//         const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
//     amountToBeReturned %= availableNotes[i];
//     typeNoOfNotes[i].innerText = noOfNotes;
//     }
// }


function calculateChange(amountToBeReturned) {
    // go over all the availables
    for (let i = 0; i < availableNotes.length; i++) {
        //no. of notes need for denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        //amount left after the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}