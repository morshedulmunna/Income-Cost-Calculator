const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");
const save = document.getElementById("save");
const savingAccount = document.getElementById("savingAccount");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");

function calculate() {
  let incomeBlance = parseFloat(income.value);
  let foodCost = parseFloat(food.value);
  let rentCost = parseFloat(rent.value);
  let clothCost = parseFloat(cloth.value);
  let totalCost = foodCost + rentCost + clothCost;

  //==error Handleing to Empty Input
  /*  if (
    (isNaN(incomeBlance) || incomeBlance < 0,
    isNaN(foodCost) || foodCost < 0,
    isNaN(rentCost) || rentCost < 0,
    isNaN(clothCost) || clothCost < 0)
  ) {
    alert("Please enter Positive Number Only");
    inputEmpty();
    return false;
  } */
  //==Calculate total Expenses Cost
  totalExpenses.innerText = totalCost;

  //==total Balance after expenses
  balance.innerText = incomeBlance - totalCost;
  inputEmpty();
}

//==set value Empty after Click
function inputEmpty() {
  food.value = "";
  rent.value = "";
  cloth.value = "";
  totalExpensesValue = "0";
  dueBalance = "0";
}
income.addEventListener("focus", () => {
  income.value = "";
});

//===Saveing balance calculate
function saveAmount() {
  let incomeBlance = parseFloat(income.value);
  let savePersentage = parseInt(save.value);

  //==error Handle

  percentageResult = savePersentage / 100;
  result = incomeBlance * percentageResult;
  saveings = result.toFixed(2);
  savingAccount.innerText = saveings;
}
