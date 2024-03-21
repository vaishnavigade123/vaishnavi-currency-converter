const currencyRates = {
    USD: 1.0,
    EUR: 0.91,
    GBP: 0.78,
    INR: 82.86,
    CAD: 1.34,
    AUD: 1.53,
    JPY: 143.43,
    CHF: 0.88,
    CNY: 7.22,
    NZD: 1.65,
      
    };
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    
    for (let currency in currencyRates) {
      const option1 = document.createElement('option');
      option1.value = currency;
      option1.textContent = currency;
      fromCurrencySelect.appendChild(option1);
    
      const option2 = document.createElement('option');
      option2.value = currency;
      option2.textContent = currency;
      toCurrencySelect.appendChild(option2);
    }
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertCurrency);
    
    function convertCurrency() {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
    
      if (!isNaN(amount)) {
        if (fromCurrency === toCurrency) {
          displayResult('Please select different currencies.');
          return;
        }
    
        if (fromCurrency in currencyRates && toCurrency in currencyRates) {
          const conversionRate = currencyRates[toCurrency] / currencyRates[fromCurrency];
          const convertedAmount = amount * conversionRate;
          displayResult(`${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
        } else {
          displayResult('Currency conversion is not available for the selected currencies.');
        }
      } else {
        displayResult('Please enter a valid amount.');
      }
    }
    
    function displayResult(message) {
      const convertedAmountElement = document.getElementById('convertedAmount');
      convertedAmountElement.textContent = message;
      document.querySelector('.result').style.display = 'block';
    }
