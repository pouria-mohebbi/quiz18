function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Negative values are not allowed");
        } else {
            setTimeout(() => {
                resolve(a + b);
            }, 500);
        }
    });
}


sum(5, 3).then(result => console.log("Sum is:", result)).catch(error => console.error("Error:", error));
sum(-5, 3).then(result => console.log("Sum is:", result)).catch(error => console.error("Error:", error));
sum(7, -2).then(result => console.log("Sum is:", result)).catch(error => console.error("Error:", error));
