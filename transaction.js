document.getElementById("credit").addEventListener('click', function () {
    const creditValue = document.getElementById('creditAmount');
    const creditValueForDisplay = parseFloat(creditValue.value);
    const creditDisplay = document.getElementById('credit-display');
    const creditTotal = parseFloat(creditDisplay.innerText);

    const totalDisplay = document.getElementById('final-total-display');
    const totalDisplayValue = parseFloat(totalDisplay.innerText);
    // console.log(totalDisplayValue);


    if (totalDisplayValue < creditValueForDisplay) {
        window.alert("দুঃখিত, আপনার পর্যাপ্ত ব্যালান্স নাই !!! ")
    } else {
        const total = creditTotal + creditValueForDisplay;
        creditDisplay.innerText = total;
        const finalTotal = totalDisplayValue - creditValueForDisplay;
        totalDisplay.innerText = finalTotal;
    };
    creditValue.value = '';
});

document.getElementById("deposit").addEventListener('click', function () {
    const depositeValue = document.getElementById('depositAmount');
    const depositValueForDisplay = parseFloat(depositeValue.value);
    const depositDisplay = document.getElementById('deposit-display');
    const depositTotal = parseFloat(depositDisplay.innerText);
    const total = depositValueForDisplay + depositTotal;
    depositDisplay.innerText = total;
    depositeValue.value = '';
    // console.log(total);

    const totalDisplay = document.getElementById('final-total-display');
    const totalDisplayValue = parseFloat(totalDisplay.innerText);
    // console.log(totalDisplayValue);
    const finalTotal = totalDisplayValue + depositValueForDisplay;
    totalDisplay.innerText = finalTotal;
});
