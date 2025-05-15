const display = document.getElementById("display");
//function for append button values
function appendValue(value) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {                   //show  0 when no value on display
  display.textContent = "0";
}

function calculate() {
  try {
    display.textContent = eval(
      display.textContent.replace(/÷/g, "/").replace(/×/g, "*")
    );
  } catch {
    display.textContent = "Error";
  }
}
