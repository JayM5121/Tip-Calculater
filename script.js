let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount")
let messageEl = document.getElementById("totalAmount")

let textMessage = "Please enter the valid Input"

function calculateTip(){
  let billAmountValue = billAmountEl.value;
  let percentageTipValue = percentageTipEl.value;

  if(billAmountValue === ""){
    messageEl.textContent = textMessage;
  }
  else if(percentageTipValue === ""){
    messageEl.textContent = textMessage;
  }else{
    messageEl.textContent = "";
    let billAmount = parseInt(billAmountValue);
    let percentageTip = parseInt(percentageTipValue);

    let calculatedTip = (percentageTip / 100) * billAmount;
    let calculatedTotal = billAmount + calculatedTip;

    tipAmountEl.value = calculatedTip;
    totalAmountEl.value = calculatedTotal;
  }
}




