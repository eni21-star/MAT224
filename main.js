const sBtn = document.getElementById('xValues');
const calc = document.getElementById('calc');
const label = document.getElementById('arraytext');
//label.innerHTML = "Array Vales are ";
let xArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//let xArray = [];
let staticYArray = [1635.382, 1545.991, 1559.160, 1540.759, 1546.098, 1430.118, 1391.97, 1413.034, 1415.819, 1240.260, 1237.000, 1529.764, 1558.667, 1660.256, 1687.338]
let yArray = [];

// sBtn.addEventListener("keyup", e => {
//   if (e.key == "Enter") {


//     const xValueElement = document.getElementById('xValues');
//     const xValue = xValueElement.value;
//     if (xArray.length < 25) {
//       xArray.push(xValue);
//       xValueElement.value = "";

//     }

//     for (let i = 0; i < xArray.length; i++) {
//       label.innerHTML += xArray[i] + ", ";
//     }

//   }
// });

calc.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    let polynomialValues = -((0.00218) * xArray[i] ** 6) + (0.0384 * xArray[i] ** 5) + (0.01494 * xArray[i] ** 4) - (8.008845 * xArray[i] ** 3) + (68.07311 * xArray[i] ** 2) - (221.88364 * xArray[i]) + 1796.95;
    yArray.push(polynomialValues);
  }
  localStorage.setItem('xArray', JSON.stringify(xArray));
  localStorage.setItem('yArray', JSON.stringify(yArray));
  localStorage.setItem('staticYArray', JSON.stringify(staticYArray));
  calc.innerHTML = "..."
  setTimeout(() => {
    window.open('chart.html', '_blank');
  }, 1000);

  calc.innerHTML = "..."
});