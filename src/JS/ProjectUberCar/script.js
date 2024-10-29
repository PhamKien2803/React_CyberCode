//Hàm kiểm tra số km tương ứng và set giá cho từng xe
document.getElementById("calculateBtn").addEventListener("click", function () {
  var km = parseFloat(document.getElementById("kmInput").value);
  var waitTime = parseFloat(document.getElementById("waitTimeInput").value);

  // Kiểm tra trạng thái checkbox
  var isUberX = document.getElementById("uberX").checked;
  var isUberSUV = document.getElementById("uberSUV").checked;
  var isUberBlack = document.getElementById("uberBlack").checked;

  var rate = 0; // Đơn giá mỗi loại xe

  if (isUberX) {
    // Tính giá cho Uber X
    if (km === 1) {
      rate = 8000; // Giá cho 1 km đầu tiên
    } else if (km > 1 && km <= 20) {
      rate = 12000; // Giá từ km thứ 2 đến km 20
    } else if (km > 20) {
      rate = 10000; // Giá từ km thứ 21 trở đi
    }
  } else if (isUberSUV) {
    // Tính giá cho Uber SUV
    if (km === 1) {
      rate = 10000;
    } else if (km > 1 && km <= 20) {
      rate = 15000;
    } else if (km > 20) {
      rate = 13000;
    }
  } else if (isUberBlack) {
    // Tính giá cho Uber Black
    if (km === 1) {
      rate = 15000;
    } else if (km > 1 && km <= 20) {
      rate = 20000;
    } else if (km > 20) {
      rate = 18000;
    }
  }

  // Nếu không có loại xe nào được chọn, thông báo lỗi
  if (rate === 0) {
    alert("Vui lòng chọn loại xe!");
    return;
  }

  // Tính tổng tiền dựa trên km và thời gian chờ
  if (!isNaN(km) && !isNaN(waitTime)) {
    var totalCost = rate * km + waitTime * 3000;
    alert("Tổng số tiền là: " + totalCost + " VNĐ");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin và chọn loại xe!");
  }
});

// Hiển thị thông tin hóa đơn trong modal
document
  .getElementById("invoiceModal")
  .addEventListener("show.bs.modal", function () {
    var km = parseFloat(document.getElementById("kmInput").value);
    var waitTime = parseFloat(document.getElementById("waitTimeInput").value);

    // Kiểm tra trạng thái checkbox
    var isUberX = document.getElementById("uberX").checked;
    var isUberSUV = document.getElementById("uberSUV").checked;
    var isUberBlack = document.getElementById("uberBlack").checked;
    var invoice = document.getElementById("invoiceContent");
    var selectedCar = "";

    // Kiểm tra xem đang chọn xe nào và hiển thị tên dễ hiểu
    if (isUberX) {
      selectedCar = "Uber X";
    } else if (isUberSUV) {
      selectedCar = "Uber SUV";
    } else if (isUberBlack) {
      selectedCar = "Uber Black";
    }

    // Nội dung hóa đơn
    var invoiceContent = `
        Loại xe: ${selectedCar}<br/>
        Số km: ${km} km<br/>
        Thời gian chờ: ${waitTime} phút<br/>`;

    invoice.innerHTML = invoiceContent;
  });

