const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");

function calculate() {
  //==Calculate total Expenses Cost
  let foodCost = parseFloat(food.value);
  let rentCost = parseFloat(rent.value);
  let clothCost = parseFloat(cloth.value);
  let total = foodCost + rentCost + clothCost;
  let totalExpensesValue = parseFloat(totalExpenses.innerText);
  totalExpenses.innerText = total + totalExpensesValue;

  //==total Balance after expenses
  let incomeBlance = parseFloat(income.value);
  let dueBalance = parseFloat(balance.innerText);
  balance.innerText = dueBalance + (incomeBlance - total);
  //==set value Empty after Click
  food.value = "";
  rent.value = "";
  cloth.value = "";
}
