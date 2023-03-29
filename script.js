function convertTemperature() {
    // Get input temperature and type
    const tempInput = document.getElementById("tempInput").value;
    const inputType = document.getElementById("inputType").value;
  
    // Get conversion type
    const convertType = document.getElementById("convertType").value;
  
    // Check for empty input
    if (tempInput === "") {
      alert("Please enter a temperature");
      return;
    }
  
    // Convert temperature
    let convertedTemp;
    if (inputType === "celsius" && convertType === "fahrenheit") {
      convertedTemp = (tempInput * 9 / 5) + 32;
    } else if (inputType === "fahrenheit" && convertType === "celsius") {
      convertedTemp = (tempInput - 32) * 5 / 9;
    } else {
      alert("Please select different input and conversion types");
      return;
    }
  
    // Display result
    const result = document.getElementById("result");
    result.innerHTML = `${tempInput} ${inputType.toUpperCase()} is equal to ${convertedTemp.toFixed(2)} ${convertType.toUpperCase()}`;
  }
  