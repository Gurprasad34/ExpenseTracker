const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")
const limitButton = document.getElementById("limitButton")
const categorySelect = document.getElementById("categorySelect");
const categoryExpensesDisplay = document.getElementById("categoryExpenses");
const budgetLimitInput = document.getElementById("budgetLimitInput"); // Corrected to match HTML

let budgetLimit = 0;  // Track the budget limit
let totalExpenses = 0;  // Track total expenses
let categoryExpenses = [];  // Track all expenses

// Initialize display on page load
    function initializeDisplay() {
    amountDisplay.textContent = totalExpenses.toFixed(2);
    updateCategoryExpensesDisplay();
    if (budgetLimit > 0) {
        alert(`Your current budget limit is: $${budgetLimit.toFixed(2)}`);
    }
    }

// Set the budget limit and handle input validation
    function limitPrompt(event) {
    event.preventDefault();
    const userInput = parseFloat(budgetLimitInput.value);
    
    if (isNaN(userInput) || userInput <= 0) {
        alert("Please enter a valid positive number for the budget limit.");
        // budgetLimit = 0; // Reset if invalid input
        return;
    } else {
        budgetLimit = userInput;
        localStorage.setItem("budgetLimit", budgetLimit); // Save budget to storage
        alert(`Budget Limit Set: $${budgetLimit.toFixed(2)}`);
        console.log(`Budget Limit Set: $${budgetLimit}`);
    }
    budgetLimitInput.value = ""; // Clear input after setting
    }

// Display and calculate total expenses
    function displayAmount(event) {
    event.preventDefault();
    const enteredAmount = parseFloat(amountInput.value);
    const selectedCategory = categorySelect.value;
    if (isNaN(enteredAmount) || enteredAmount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }
        totalExpenses += enteredAmount;
        localStorage.setItem("totalExpenses", totalExpenses); // Save total expenses to storage
        amountDisplay.textContent = totalExpenses.toFixed(2);

    if (categoryExpenses[selectedCategory]) {
        categoryExpenses[selectedCategory] += enteredAmount;
    } else {
        categoryExpenses[selectedCategory] = enteredAmount;
    }
    
// Save category expenses to storage
    localStorage.setItem("categoryExpenses", JSON.stringify(categoryExpenses));

// Update category expenses display
    updateCategoryExpensesDisplay();

// Check if over budget
    if (budgetLimit > 0 && totalExpenses > budgetLimit) {
        alert("Warning: You have exceeded your budget limit!");
    }

    amountInput.value = "";  // Clear input
    categorySelect.value = "Select Category";  // Reset category selector
    }

// Update the display for category expenses
function updateCategoryExpensesDisplay() {
    categoryExpensesDisplay.innerHTML = "<strong>Category Totals:</strong><br>";
    for (const [category, amount] of Object.entries(categoryExpenses)) {
        categoryExpensesDisplay.innerHTML += `${category}: $${amount.toFixed(2)}<br>`;
    }
    }

// Event listeners
    submitButton.addEventListener('click', displayAmount);
    limitButton.addEventListener('click', limitPrompt);

// Initialize display on page load
    initializeDisplay();
