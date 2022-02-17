const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");
const save = document.getElementById("save");
const savingAccount = document.getElementById("savingAccount");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");
const remainingBalance = document.getElementById("remainingBalance");

function calculate() {
  let incomeBlance = parseFloat(income.value);
  let foodCost = parseFloat(food.value);
  let rentCost = parseFloat(rent.value);
  let clothCost = parseFloat(cloth.value);
  let totalCost = foodCost + rentCost + clothCost;

  // Error Handle
  errorHandle();
  //==Calculate total Expenses Cost
  totalExpenses.innerText = totalCost.toFixed(2);

  //==total Balance after expenses
  let balanceResult = incomeBlance - totalCost;
  balance.innerText = balanceResult.toFixed(2);
}

//==When Focused Input Box then Input Value is Empty Event
income.addEventListener("focus", () => {
  income.value = "";
  valueEmpty();
});
food.addEventListener("focus", () => {
  food.value = "";
  valueEmpty();
});
rent.addEventListener("focus", () => {
  rent.value = "";
  valueEmpty();
});
cloth.addEventListener("focus", () => {
  cloth.value = "";
  valueEmpty();
});
save.addEventListener("focus", () => {
  save.value = "";
  savingAccount.innerText = "0";
  remainingBalance.innerText = "0";
});
// When is focused in input result set 0
function valueEmpty() {
  totalExpenses.innerText = "0";
  balance.innerText = "0";
  savingAccount.innerText = "0";
  remainingBalance.innerText = "0";
}
//===Saveing balance & Remaining Balance calculate
function saveAmount() {
  let incomeBlance = parseFloat(income.value);
  let savePersentage = parseInt(save.value);
  let duebalance = parseFloat(balance.innerText);

  percentageResult = savePersentage / 100;
  result = incomeBlance * percentageResult;
  saveings = result.toFixed(2);
  savingAccount.innerText = saveings;
  remainingTotalBalance = duebalance - saveings;
  remainingBalance.innerText = remainingTotalBalance.toFixed(2);
  //==error Handle
  if (duebalance < saveings) {
    alert("Your balance not Enough to Save");
  }
}

function errorHandle() {
  let incomeBlance = parseFloat(income.value);
  let foodCost = parseFloat(food.value);
  let rentCost = parseFloat(rent.value);
  let clothCost = parseFloat(cloth.value);
  let totalCost = foodCost + rentCost + clothCost;
  //==error Handleing to Empty Input
  if (incomeBlance < 0 || isNaN(incomeBlance)) {
    alert("Please Inter only Positive Number");
  } else if (foodCost < 0 || isNaN(foodCost)) {
    alert("Please Inter only Positive Number");
  } else if (rentCost < 0 || isNaN(rentCost)) {
    alert("Please Inter only Positive Number");
  } else if (clothCost < 0 || isNaN(clothCost)) {
    alert("Please Inter only Positive Number");
  } else if (incomeBlance < totalCost) {
    alert("Your Income Amount not Enough");
  }
}
