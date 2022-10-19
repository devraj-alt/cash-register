var billAmount = document.querySelector("#billAmount");
var cashReceived = document.querySelector("#cashReceived");
var btn = document.querySelector("#btn");
var returnCash = document.querySelector("#returnCash");
var alertBillMsg = document.querySelector("#alert-bill-msg");
var alertReceivedMsg = document.querySelector("#alert-received-msg");

const denomination = [1, 5, 10, 20, 100, 500, 2000];

function clickHandler() {
  var bill = billAmount.value;
  var receive = cashReceived.value;
  calculate(Number(bill), Number(receive));
}

function calculate(bill, receive) {
  console.log(bill, receive);
  if (bill > 0) {
    alertBillMsg.classList.remove("show-error-msg");
    alertBillMsg.classList.add("hide-error-msg");
  } else {
    alertBillMsg.classList.remove("hide-error-msg");
    alertBillMsg.classList.add("show-error-msg");
  }

  if (receive > 0) {
    alertReceivedMsg.classList.remove("show-error-msg");
    alertReceivedMsg.classList.add("hide-error-msg");
  } else {
    alertReceivedMsg.classList.remove("hide-error-msg");
    alertReceivedMsg.classList.add("show-error-msg");
  }

  if (receive >= bill) {
    alertReceivedMsg.innerText = "Invalid received amount";
    if (bill > 0 && receive > 0) {
      var returnAmount = receive - bill;
      returnCash.innerHTML = "";
      let trRowHeading = document.createElement("tr");
      let tdCol1Note = document.createElement("td");
      let tdCol2Count = document.createElement("td");

      tdCol1Note.innerText = "Note";
      tdCol2Count.innerText = "Count";
      trRowHeading.appendChild(tdCol1Note);
      trRowHeading.appendChild(tdCol2Count);
      returnCash.appendChild(trRowHeading);

      for (let i = denomination.length - 1; i > -1; i--) {
        console.log(denomination[i], returnAmount);
        if (denomination[i] <= returnAmount) {
          var noteCount = returnAmount / denomination[i];
          var amount = Math.floor(noteCount) * denomination[i];
          var remaningAmount = returnAmount - amount;
          returnAmount = remaningAmount;
          createTable(denomination[i], Math.floor(noteCount));
        }
      }
    }
  } else {
    alertReceivedMsg.innerText =
      "Received amount cannot be less than bill amount";
    alertReceivedMsg.classList.remove("hide-error-msg");
    alertReceivedMsg.classList.add("show-error-msg");
  }
}

function createTable(note, count) {
  let trRow = document.createElement("tr");
  let tdCol1 = document.createElement("td");
  let tdCol2 = document.createElement("td");

  tdCol1.innerText = note;
  tdCol2.innerText = count;

  trRow.appendChild(tdCol1);
  trRow.appendChild(tdCol2);
  returnCash.appendChild(trRow);
}

btn.addEventListener("click", clickHandler);
