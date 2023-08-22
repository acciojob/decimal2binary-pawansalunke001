
	function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        return '0';
    }

    let binary = '';
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binary;
}
  

window.decimalToBinary = decimalToBinary;
