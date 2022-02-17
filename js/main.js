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

  errorCheck = errorHandle(
    incomeBlance,
    foodCost,
    rentCost,
    clothCost,
    totalCost
  );
  if (errorCheck == true) {
    //==Calculate total Expenses Cost
    totalExpenses.innerText = totalCost.toFixed(2);

    //==total Balance after expenses
    let balanceResult = incomeBlance - totalCost;
    balance.innerText = balanceResult.toFixed(2);
  }
}
//

//==When Focused Input Box then Input Value is Empty Event Handler
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

//

//
//===Saveing balance & Remaining Balance calculation
function saveAmount() {
  let incomeBlance = parseFloat(income.value);
  let savePersentage = parseInt(save.value);
  let duebalance = parseFloat(balance.innerText);

  percentageResult = savePersentage / 100;
  result = incomeBlance * percentageResult;
  saveings = result.toFixed(2);
  remainingTotalBalance = duebalance - saveings;

  errorCheck = saveError(duebalance, saveings, savePersentage);
  if (errorCheck == true) {
    savingAccount.innerText = saveings;
    remainingBalance.innerText = remainingTotalBalance.toFixed(2);
  }
}

//

// Income Expenses calculation Error Hander Checking function
function errorHandle(incomeBlance, foodCost, rentCost, clothCost, totalCost) {
  //==error Handleing to Empty Input
  if (incomeBlance < 0 || isNaN(incomeBlance)) {
    alert("Please Inter only Positive Number");
    return false;
  } else if (foodCost < 0 || isNaN(foodCost)) {
    alert("Please Inter only Positive Number");
    return false;
  } else if (rentCost < 0 || isNaN(rentCost)) {
    alert("Please Inter only Positive Number");
    return false;
  } else if (clothCost < 0 || isNaN(clothCost)) {
    alert("Please Inter only Positive Number");
    return false;
  } else if (incomeBlance < totalCost) {
    alert("Your Income Amount not Enough");
    return false;
  }
  return true;
}

// Save Ammout And remaing Ammout Error Handle Function
function saveError(duebalance, saveings, savePersentage) {
  //==error Handle
  if (duebalance < saveings) {
    alert("Your balance not Enough to Save");
    return false;
  } else if (savePersentage < 0 || isNaN(savePersentage)) {
    alert("You can't input Negative Number or String ");
    return false;
  }
  return true;
}
