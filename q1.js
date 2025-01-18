function calculate(num1, num2, operation, callback) {
    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else {
        console.error("Invalid operation");
        return;
    }
    callback(result);
}

function handleCalculationResult(result) {
    console.log("Result of the calculation is:", result);
}


calculate(5, 3, "add", handleCalculationResult);       
calculate(4, 6, "multiply", handleCalculationResult);  
