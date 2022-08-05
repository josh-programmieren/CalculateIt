function getDisplay() {
    var display = document.getElementById("display");
    return display;
}

function clearDisplay() {
    var display = getDisplay();
    var len = display.innerHTML.length;
    var counter = 0;
    while (counter < len) {
        backspace();
        counter++;
    }
    console.log("clear");
}

function backspace() {
    var display = getDisplay();
    var text = display.innerHTML;
    if (text.length > 0) {
        display.innerHTML = text.substring(0, text.length - 1);
    }
    console.log("backspace");
}

function add(value) {
    var display = getDisplay();
    var text = display.innerHTML;
    display.innerHTML = text + value;
    console.log("add " + value);
}

function calculate() {
    var display = getDisplay();
    var text = display.innerHTML;
    var result = eval(text);
    display.innerHTML = result;
    console.log("calculate");
}