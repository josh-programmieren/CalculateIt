function getResultField() {
    return document.getElementById('result');
}

function getExpressionField() {
    return document.getElementById('expression');
}

function calculate() {
    var resultField = getResultField();
    var expressionField = getExpressionField();
    var expression = expressionField.value;
    var result = eval(expression);
    resultField.style.color = 'black';
    resultField.innerHTML = result;
}
var expressionField = getExpressionField();
var calcbtn = document.getElementById('calc');
var resetbtn = document.getElementById('reset');
expressionField.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        var allowed = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')'];
        var valid = true;
        var expression = expressionField.value;
        for (var i = 0; i < expression.length; i++) {
            if (!allowed.includes(expression[i])) {
                valid = false;
                break;
            }
        }
        if (expressionField.value === '') {
            var resultField = getResultField();
            resultField.style.color = 'red';
            resultField.innerHTML = 'No expression entered';
        } else if (!valid) {
            var resultField = getResultField();
            resultField.style.color = 'red';
            resultField.innerHTML = 'Invalid expression';
        }
    } else {
        calculate();
    }
}, false);
calcbtn.addEventListener('click', function() {
    var allowed = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')'];
    var valid = true;
    var expression = expressionField.value;
    for (var i = 0; i < expression.length; i++) {
        if (!allowed.includes(expression[i])) {
            valid = false;
            break;
        }
    }
    if (expressionField.value === '') {
        var resultField = getResultField();
        resultField.style.color = 'red';
        resultField.innerHTML = 'No expression entered';
    } else if (!valid) {
        var resultField = getResultField();
        resultField.style.color = 'red';
        resultField.innerHTML = 'Invalid expression';
    } else {
        calculate();
    }
});
resetbtn.addEventListener('click', function() {
    var resultField = getResultField();
    var expressionField = getExpressionField();
    resultField.style.color = 'black';
    resultField.innerHTML = 'No result yet';
    expressionField.value = '';
});