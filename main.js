const sBtn = document.getElementById('xValues');
const calc = document.getElementById('calc');
const defaultCalculator = document.getElementById('calc1');
const label = document.getElementById('arraytext');
let xArray = [];
let defaultXarray = [1, 3, 5, 8, 10, 12, 15, 16, 18, 19, 22];

let staticYArray = [1635.382, 1545.991, 1559.160, 1540.759, 1546.098, 1430.118, 1391.97, 1413.034, 1415.819, 1240.260, 1237.000]
let yArray = [];

sBtn.addEventListener("keyup", e => {
  if (e.key == "Enter") {

    try {

      const xValueElement = document.getElementById('xValues');
      const xValue = xValueElement.value;
      if (xArray.length < 11 && xValue != "" && !isNaN(xValue)) {
        xArray.push(xValue);
        xValueElement.value = "";
    }
      else {
        alert("please enter a value for X or you have reached the maximum number of values allowed");
      }
    } catch (error) {
      alert(error)
    }

  }
});

calc.addEventListener("click", () => {
  if (xArray.length == 11) {

    getYvaluesUserInput();
    localStorage.setItem('xArray', JSON.stringify(xArray));
    localStorage.setItem('yArray', JSON.stringify(yArray));
    localStorage.setItem('staticYArray', JSON.stringify(staticYArray));
    alert('X values are : ' + '\n'+ xArray + '\n' + 'Y values are : ' + '\n' + yArray);
    calc.innerHTML = "..."
    setTimeout(() => {
      window.open('chart.html', '_blank');
    }, 500);

    calc.innerHTML = "Calculate"

  }
  else {
    alert("X values must be 11 in number")
  }
});

defaultCalculator.addEventListener("click", () => {
  getYvalues();
  localStorage.setItem('xArray', JSON.stringify(defaultXarray));
  localStorage.setItem('yArray', JSON.stringify(yArray));
  localStorage.setItem('staticYArray', JSON.stringify(staticYArray));



alert('X values are : ' + '\n'+ defaultXarray + '\n' + 'Y values are : ' + '\n' + yArray);
  defaultCalculator.innerHTML = "..."
  setTimeout(() => {
    window.open('chart.html', '_blank');
  }, 500);

  defaultCalculator.innerHTML = "Calculate Default Values";

})



function getYvalues() {
  for (let i = 0; i < 11; i++) {
    let polynomialValues = (0.00000243 * Math.pow(defaultXarray[i], 10)) -
      (0.00028009 * Math.pow(defaultXarray[i], 9)) +
      (0.01401814 * Math.pow(defaultXarray[i], 8)) -
      (0.39896826 * Math.pow(defaultXarray[i], 7)) +
      (7.09892803 * Math.pow(defaultXarray[i], 6)) -
      (81.72359017 * Math.pow(defaultXarray[i], 5)) +
      (608.61993 * Math.pow(defaultXarray[i], 4)) -
      (2845.75699 * Math.pow(defaultXarray[i], 3)) +
      (7801.93312 * Math.pow(defaultXarray[i], 2)) -
      (10905.06235 * defaultXarray[i]) +
      7050.65818;
    yArray.push(polynomialValues);

  }
}


function getYvaluesUserInput() {
  for (let i = 0; i < 11; i++) {
    let polynomialValues = (0.00000243 * Math.pow(xArray[i], 10)) -
      (0.00028009 * Math.pow(xArray[i], 9)) +
      (0.01401814 * Math.pow(xArray[i], 8)) -
      (0.39896826 * Math.pow(xArray[i], 7)) +
      (7.09892803 * Math.pow(xArray[i], 6)) -
      (81.72359017 * Math.pow(xArray[i], 5)) +
      (608.61993 * Math.pow(xArray[i], 4)) -
      (2845.75699 * Math.pow(xArray[i], 3)) +
      (7801.93312 * Math.pow(xArray[i], 2)) -
      (10905.06235 * xArray[i]) +
      7050.65818;
    yArray.push(polynomialValues);

  }
}