const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const result = document.querySelector("#result");

convertBtn.addEventListener("click", () => {
    let inputValue = parseFloat(degree.value);
    let output;

    if (isNaN(inputValue)) {
        result.textContent = "Please enter a number!";
        return;
    }

    if (tempType.value === "celsius") {
        output = (inputValue * 9/5) + 32; 
        result.innerHTML = `${inputValue} °C is ${output.toFixed(2)} °F`;
    } else if (tempType.value === "fahrenheit") {
        output = (inputValue - 32) * 5/9; 
        result.innerHTML = `${inputValue} °F is ${output.toFixed(2)} °C`;
    }
});
