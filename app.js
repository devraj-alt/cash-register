var billAmount = document.querySelector("#billAmount");
var cashReceived = document.querySelector("#cashReceived");
var btn = document.querySelector("#btn");
var returnCash = document.querySelector("#returnCash");

const denomination = [
    1, 5, 10, 20, 100, 500, 2000
];

function clickHandler() {
    var bill = billAmount.value
    var receive = cashReceived.value
    calculate(Number(bill), Number(receive))
};

function calculate(bill, receive) {
    var returnAmount = receive - bill

    for (let i = denomination.length - 1; i > -1; i--) {

        if (denomination[i] < returnAmount) {
            var noteCount = returnAmount / denomination[i]
            var amount = Math.floor(noteCount) * denomination[i]
            var remaningAmount = returnAmount - amount
            returnAmount = remaningAmount
            createTable(denomination[i], Math.floor(noteCount))
        }
    }
};

function createTable(note, count) {
    let trRow = document.createElement("tr")
    let tdCol1 = document.createElement("td")
    let tdCol2 = document.createElement("td")

    tdCol1.innerText = note
    tdCol2.innerText = count

    trRow.appendChild(tdCol1)
    trRow.appendChild(tdCol2)
    returnCash.appendChild(trRow)
}


btn.addEventListener("click", clickHandler)