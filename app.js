document.getElementById('position-sizing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get entry price, stop loss, and risk per trade from the form
    const entryPrice = parseFloat(document.getElementById('entry-price').value);
    const stopLoss = parseFloat(document.getElementById('stop-loss').value);
    const risk = parseFloat(document.getElementById('risk').value);

    if (!isNaN(entryPrice) && !isNaN(stopLoss) && !isNaN(risk) && stopLoss < entryPrice) {
        // Calculate quantity based on the formula: quantity = risk / (entry price - stop loss)
        const quantity = risk / (entryPrice - stopLoss);

        // Calculate for each index fund, rounding down to the nearest integer
        const nifty = Math.floor(quantity / 25);
        const banknifty = Math.floor(quantity / 15);
        const finnifty = Math.floor(quantity / 25);
        const midcap = Math.floor(quantity / 50);
        const sensex = Math.floor(quantity / 10);
        const bankex = Math.floor(quantity / 15);

        // Function to display "Don't Buy" if result < 1
        function displayResult(value) {
            return value < 1 ? "Don't Buy" : value;
        }

        // Display the results
        document.getElementById('nifty-result').innerText = displayResult(nifty);
        document.getElementById('banknifty-result').innerText = displayResult(banknifty);
        document.getElementById('finnifty-result').innerText = displayResult(finnifty);
        document.getElementById('midcap-result').innerText = displayResult(midcap);
        document.getElementById('sensex-result').innerText = displayResult(sensex);
        document.getElementById('bankex-result').innerText = displayResult(bankex);
        document.getElementById('quantity-result').innerText = Math.floor(quantity);

        document.querySelector('.results').style.display = 'block';
    } else {
        alert("Please enter valid values. Stop Loss should be less than Entry Price.");
    }
});
