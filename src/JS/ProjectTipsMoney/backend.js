function getElementbyId(id) {
  return document.getElementById(id);
}

function validationInput(input) {
  const specialCharRegex = /[^a-zA-Z0-9 ]/;
  if (input === "") {
    return "Input is empty";
  } else if (specialCharRegex.test(input)) {
    return "Input contains special characters";
  } else if (isNaN(input)) {
    return "Input is not a number";
  } else {
    return "Valid input";
  }
}

function caculatorTip() {
  var tongBill = getElementbyId("bill").value;
  var feedback = getElementbyId("service").value;
  var people = getElementbyId("peopleMoney").value;

  if (tongBill === "" || feedback == 0) {
    getElementbyId("each").style.display = "none";
  } else if (people === "" || people <= 1) {
    getElementbyId("each").style.display = "block";
  }

  var totalBill = (tongBill * feedback) / people;
  //Làm tròn đến số thập phân có 2 chữ số
  totalBill = Math.round(totalBill * 100) / 100;
  //Đảm bảo lúc nào cũng có 2 chữ số thập phân
  totalBill.toFixed(2);

  //hiển thị vùng thông báo
  getElementbyId("totalTip").style.display = "block";
  getElementbyId("tip").innerHTML = totalBill;
}

getElementbyId("totalTip").style.display = "none";
getElementbyId("each").style.display = "none";

getElementbyId("caculator").onclick = function () {
  caculatorTip();
};
