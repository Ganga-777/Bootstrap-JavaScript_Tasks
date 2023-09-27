function reverseNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();
  
    // Reverse the string using the split, reverse, and join methods
    let reversedStr = numStr.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    let reversedNum = parseInt(reversedStr, 10);
  
    return reversedNum;
}

function reverseAndDisplay() {
    const inputElement = document.getElementById('inputNumber');
    const outputElement = document.getElementById('output');
    const inputValue = parseInt(inputElement.value, 10);

    if (!isNaN(inputValue)) {
        const reversedValue = reverseNumber(inputValue);
        outputElement.textContent = reversedValue;
    } else {
        outputElement.textContent = 'Invalid input. Please enter a valid number.';
    }
}