const prompt = require('prompt-sync')({
    sigint: true
  });
  // Write your code below
  let runProgram = true;
  // Use objects to store expenses in different categories.
  let expenses = {};
  // Use arrays to store income entries.
  let income = [];
  console.log(`Welcome to the Personal Budget Tracker Application!`);
  while(runProgram) {
    // a function to add income entries to the income array
    function addIncome(value) {
      income.push(value);
    }
    // a function to add expenses to the respective category in the expenses object.
    function addExpense(category, value) {
      if(category in expenses) {
        expenses[category] += value;
      } else {
        expenses[category] = value;
      }
    }
    // a function to remove expenses from a specific category
    function removeExpense(category, value) {
      if(category in expenses) {
        expenses[category] -= value;
      } else {
        console.log(`The expenses don't include ${category}.`);
      }
    }
    // Displays all expenses
    function viewExpenses() {
      console.log(`Here is a list of all expenses:`);
      for(let key in expenses) {
        console.log(`${key}: $${expenses[key]}`);
      }
    }
    // Displays all income entries
    function viewIncome() {
      console.log(`Here is a list of all income entries:`);
      for(let i = 0; i < income.length; i++) {
        console.log(`$${income[i]}`);
      }
    }
    // Displays a summary of expenses, income, and balance
    function viewSummary() {
      let totalIncome = 0;
      let totalExpenses = 0;
      let allExpenses = "";
      let balance = 0;
      for(let key in expenses) {
        totalExpenses += expenses[key];
      }
      for(let i = 0; i < Object.keys(expenses).length; i++) {
        if(i === Object.keys(expenses).length - 1) {
          allExpenses += "and " + Object.keys(expenses)[i];
        } else {
          allExpenses += Object.keys(expenses)[i] + ", ";
        }
      }
      console.log(`The total expenses are $${totalExpenses} for ${allExpenses}.`);
      for(let i = 0; i < income.length; i++) {
        totalIncome += income[i];
      }
      console.log(`The total income is $${totalIncome}.`);
      balance = totalIncome - totalExpenses;
      console.log(`The balance is $${balance}.`)
    }
    // User Interface: Set up a loop that displays a menu with options to add income, add expenses, remove expenses, view transactions, view summary, and exit the program.
    console.log(`Choose an option:`);
    console.log(`1. Add income`);
    console.log(`2. Add expenses`);
    console.log(`3. Remove expenses`);
    console.log(`4. View transactions`);
    console.log(`5. View summary`);
    console.log(`6. Exit the program`);
    let option = prompt(`> `);
    switch(parseInt(option)) {
      case 1:
        console.log(`How much income? (Ex. 1000)`);
        let userIncome = prompt(`> `);
        addIncome(parseInt(userIncome));
        break;
      case 2:
        console.log(`What is the expense? (Ex. rent)`);
        let userExpense = prompt(`> `);
        console.log(`How much is the ${userExpense}? (Ex. 1000)`);
        let expenseAmount = prompt(`> `);
        addExpense(userExpense, Number(expenseAmount));
        break;
      case 3:
        console.log(`What is the expense? Choose an option:`);
        let expenseOption = 1;
        for(let key in expenses) {
          console.log(`${expenseOption}. The ${key} costs ${expenses[key]}`);
          expenseOption++;
        }
        let removeOption = prompt(`> `);
        let i = 1;
        for(let key in expenses) {
          if(parseInt(removeOption) === i) {
            console.log(`How much of the ${key}'s cost do you want to remove? (Ex. 1000)`);
            let removeAmount = prompt(`> `);
            removeExpense(key, parseInt(removeAmount));
            break;
          }
          i++;
        }
        break;
      case 4:
        viewExpenses();
        viewIncome();
        break;
      case 5:
        viewSummary();
        break;
      case 6:
        runProgram = false;
        break;
    }
  }