const amountInput = document.getElementById("amountInput")
const amountDisplay = document.getElementById("amountDisplay")
const submitButton = document.getElementById("submitButton")
const limitButton = document.getElementById("limitButton")

function limitPrompt(){
    const userInput = prompt("Enter budget limit")
    const budgetLimit = parseInt(userInput);
    console.log(budgetLimit)
    return budgetLimit;


}

function displayAmount(){
    const enteredAmount = amountInput.value;
    console.log(enteredAmount);
    const currentTotalAmount = amountDisplay.textContent
    const newTotalAmount = parseInt(currentTotalAmount) + parseInt(enteredAmount)
    console.log(newTotalAmount);
    amountDisplay.textContent = newTotalAmount;
    if(newTotalAmount > budgetLimit){
        alert("You are over the limit")
    }
}



submitButton.addEventListener('click',displayAmount);
limitButton.addEventListener('click',limitPrompt);



console.log("test");
console.log("change")