function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = Number(document.getElementById("tipSelect").value);
  let split = Number(document.getElementById("splitInput").value);

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;
  let total = bill + tipValue;

  document.getElementById("tipValue").innerHTML = tipValue.toFixed(2);
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("totalWithTip").innerHTML = total.toFixed(2);
  document.getElementById("splitValue").innerHTML = split + " Person";
  document.getElementById("billEach").innerHTML = newBillEach.toFixed(2);
  document.getElementById("tipEach").innerHTML = tipEach.toFixed(2);
}

let container = document.getElementsByClassName("container");
const containerEvent = () => container.addEventListener("input", update);
