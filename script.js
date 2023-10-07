document.getElementById('calculate-button').addEventListener('click', calculate);

results = [];

function calculate() {

    firstNumber = document.getElementById('firstNumber').value;
    secondNumber = document.getElementById('secondNumber').value;
    operator = document.getElementById('operator').value;

    document.getElementById('secondNumber').classList.remove("highlight");
    document.getElementById('secondNumberErrorText').removeAttribute('data-info');

    if (!/^-?(?!-?\.$)\d+(\.\d+)?$/.test(firstNumber)) {
        document.getElementById('firstNumberErrorText').setAttribute('data-info', 'Введено некорректное значение!');
        document.getElementById('firstNumber').classList.add("highlight");
        return;
    }

    document.getElementById('firstNumber').classList.remove("highlight");
    document.getElementById('firstNumberErrorText').removeAttribute('data-info');

    if (!/^-?(?!-?\.$)\d+(\.\d+)?$/.test(secondNumber)) {
        document.getElementById('secondNumber').classList.add("highlight");
        document.getElementById('secondNumberErrorText').setAttribute('data-info', 'Введено некорректное значение!')
        return;
    }

    document.getElementById('secondNumber').classList.remove("highlight");
    document.getElementById('secondNumberErrorText').removeAttribute('data-info');

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let result;
      switch(operator) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':  
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          result = firstNumber / secondNumber;
          if (result === Infinity) {
            alert("Ошибка: деление на 0");
            return;
          }
          break;
      }

      resultStr = "";

      if (results.length === 3) {
        results.shift();
      }

      for (index = 0; index < results.length; index++) {
        resultStr += `<span id="history">${results[index][0]} ${results[index][2]} ${results[index][1]} = ${results[index][3]}</span></br>`;
      }

      resultStr += `${firstNumber} ${operator} ${secondNumber} = ${result}`;

      results.push([firstNumber, secondNumber, operator, result]);

      document.getElementById('result').innerHTML = resultStr;
}