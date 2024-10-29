// Sửa lỗi khai báo mảng và thêm các comment để rõ ràng hơn
var array = ["HieuDau", "VitThinh", "HanDinh"];
array.push("kien"); // Thêm "kien" vào mảng
console.log("Tên đã được đẩy:", array.indexOf("kien")); // Đăng nhập chỉ số của "kien" trong mảng

//khi nào biết số lần cần duyệt dùng for
//nếu không rõ số lần lặp hay số lần duyệt thì có thế dùng đến while()
// Sửa lỗi vòng lặp để đăng nhập "ThuyChangg" 100 lần
for (let i = 1; i <= 100; i++) {
  console.log("ThuyChangg");
}

// Sửa lỗi khai báo 'name' thành mảng và thêm các comment để rõ ràng hơn
let name = ["Kien", "Han", "Hieu"]; // Khai báo 'name' là một mảng
// Sử dụng vòng lặp for để lặp qua mảng 'name' và đăng nhập mỗi phần tử
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// Sử dụng vòng lặp for...of để lặp qua mảng 'name' và đăng nhập mỗi phần tử
// Ưu điểm của for...of là ngắn gọn, dễ đọc và không cần phải quan tâm đến chỉ số của phần tử
for (const element of name) {
  console.log(element);
}

//Khi nào cần kiểm tra xem điều kiện đó có đúng hay không thì dùng đến while
var i = 0;
while (i < name.length) {
  console.log(name[i]);
  i++;
}

//Bài Tập
//Tính tổng phần tử trong mảng
var a = [3, -6, 8, -9, -4, 5, 12, -4, 12];
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var a = [0,0,0,0,0,0]

var sum = 0;
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log("Tổng các số phần tử trong mảng: ", sum);

for (const element of a) {
  sum += element;
}
console.log("Tổng các số phần tử trong mảng: ", sum);

//Tìm ptu âm lớn nhất
let maxnegative = null; // Giá trị âm lớn nhất
let maxnegativeIndex = -1; // Chỉ số của giá trị âm lớn nhất
let maxNewArrayNegative = []; // Mảng chứa chỉ số của các số âm lớn nhất

for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    // Nếu maxnegative chưa được gán hoặc phần tử hiện tại lớn hơn maxnegative
    if (maxnegative == null || a[i] > maxnegative) {
      maxnegative = a[i]; //gán giá trị âm lớn nhất
      maxnegativeIndex = i; // gán vị trí của số âm lớn nhất
      maxNewArrayNegative = [i]; //thêm vào mảng chứa vị trí index của những số âm lớn nhất

      // Kiểm tra xem phần tử hiện tại có bằng giá trị âm lớn nhất không
    } else if (a[i] === maxnegative) {
      maxnegativeIndex = i; //gán vị trí index lớn nhất cho số có gtri âm lớn nhất
      maxNewArrayNegative.push(i); //đẩy các vị trí index tìm thấy vào một mảng mới
    }
  }
}

if (maxnegative !== null) {
  console.log(
    "Phần tử âm lớn nhất là: ",
    maxnegative,
    "Tại vị trí index = ",
    maxnegativeIndex,
    "Mảng chứa index âm lớn nhất: ",
    maxNewArrayNegative
  );
} else {
  console.log("KHông có phần tử âm trong mảng");
}

//Tính tổng các số lẻ trong mảng
var sumOdd = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] % 2 !== 0) {
    sumOdd += a[i];
  }
}
console.log("Tổng số lẻ lớn nhất trong mảng là: ", sumOdd);

//Tính tổng các số chẵn trong mảng , phải là số nguyên dương

var sumEven = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] > 0 && a[i] % 2 === 0) {
    sumEven += a[i];
  }
}

console.log("Tổng các số chẵn nguyên dương trong mảng là: ", sumEven);
//Tìm số bé nhất trong mảng và xuất chỉ số tại vị trí đó trong mảng a
let minNumber = a[0];
let minIndexNumber = 0;
let minNewArrayNumbers = [];

for (let i = 1; i < a.length; i++) {
  if (a[i] < minNumber) {
    minNumber = a[i];
    minIndexNumber = i;
    minNewArrayNumbers = [i];
  } else if (a[i] === minNumber) {
    minIndexNumber = i;
    minNewArrayNumbers.push(i);
  }
}
if (minNumber !== null) {
  console.log(
    "Số bé nhất là: ",
    minNumber,
    "Tại vị trí index: ",
    minIndexNumber,
    "Mảng chứa các vị trí index: ",
    minNewArrayNumbers
  );
} else {
  console.log(
    "Không có số nào bé nhất trong mảng và không tồn tại vị trí index nào"
  );
}

//tìm số lớn nhất trong mảng và xuất chỉ số tại vị trí đó trong mảng a

let maxNumber = a[0];
let maxNumberIndex = 0;
let maxNewArrayMaxNumber = [];
for (let i = 1; i < a.length; i++) {
  if (a[i] > maxNumber) {
    maxNumber = a[i];
    maxNumberIndex = i;
    maxNewArrayMaxNumber = [i];
  } else if (a[i] === maxNumber) {
    maxNumberIndex = i;
    maxNewArrayMaxNumber.push(i);
  }
}

if (maxNumber !== null) {
  console.log(
    "Số lớn nhất: ",
    maxNumber,
    "Tại vị trí index là: ",
    maxNumberIndex,
    "Mảng chứa index của các số lớn nhất trong mảng là: ",
    maxNewArrayMaxNumber
  );
} else {
  console.log("Không có số nào lớn nhất");
}
// var a1 = [3, -6, 8, -9, -4, 5, 12, -4, 12]
function maxNumbers(arr) {
  let maxNumber = arr[0];
  let maxNumberIndex = 0;
  let maxNewArrayMaxNumber = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
      maxNumberIndex = i;
      maxNewArrayMaxNumber = [i];
    } else if (arr[i] === maxNumber) {
      maxNewArrayMaxNumber.push(i);
    }
  }
  console.log(
    "Số lớn nhất trong mảng là: ",
    maxNumber,
    "Tại vị trí index là: ",
    maxNumberIndex,
    "Mảng chứa index của các số lớn nhất trong mảng là: ",
    maxNewArrayMaxNumber
  );
}
let a1 = [3, -6, 8, -9, -4, 5, 12, -4, 12];
maxNumbers(a1);

//Lấy ra những số chẵn và thêm nó vào mảng mới và phải là số nguyên dướng

let newArray = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0 && a[i] > 0) {
    newArray.push(a[i]);
  }
}
console.log("Mảng số chẵn mới: ", newArray);

//Tìm ra vị trí lớn nhất của 1 số nguyên dương chẵn trong mảng a
let maxIndex = -1;
let maxValue = -1;
for (let i = 0; i < a.length; i++) {
  if (a[i] > 0 && a[i] % 2 === 0) {
    if (maxValue < a[i]) {
      maxValue = a[i];
      maxIndex = i;
    }
  }
}

console.log("Vị trí của số nguyên dương chẵn lớn nhất là: ", maxIndex);

//Tìm ra vị trí nhỏ nhất của 1 số nguyên âm lẻ trong mảng a
let minIndex = -1;
let minValue = -1;
let newMinArray = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] < 0 && a[i] % 2 !== 0) {
    if (minValue === -1 || a[i] < minValue) {
      minValue = a[i];
      minIndex = i;
      newMinArray = [i];
    } else if (a[i] === minValue) {
      newMinArray.push(i);
    }
  }
}

if (minValue !== null) {
  console.log(
    "Số nguyên âm nhỏ nhất trong mảng là: ",
    minValue,
    "Vị trí index của số nguyên âm nhỏ nhất trong mảng là: ",
    minIndex,
    "Mảng mới chứa các index số nguyên âm: ",
    newMinArray
  );
} else {
  console.log("Không có vị trí index của số nào bé nhất trong mảng a");
}

//Sắp xếp mạng tăng dần rùi push vào 1 mảng mới
let sortedArray = [];
sortedArray = a.sort((x, y) => x - y);
sortedArray.push();

console.log("Mảng mới khi được sort tăng dần: ", sortedArray);

//

//kiểm tra số chẵn lẻ, nếu là chẵn thì push vào mảng chẵn mới, nếu là lẻ push vào mảng lẻ mới
let evenArray = [];
let oddArray = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    evenArray.push(a[i]);
  } else {
    oddArray.push(a[i]);
  }
}

console.log("Mảng số chẵn là: ", evenArray);
console.log("Mảng số lẻ là: ", oddArray);

//Thuật toán BubbleSort
const bubbleSort = (array) => {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; i++) {
      if (array[j] > array[i] + 1) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

let sortedNumber = bubbleSort(a);
console.log("Mảng số được sắp xếp nổi bọt là: ", sortedNumber);

function timSoLonNhat(a, b, c) {
  return Math.max(a, b, c); // Tìm số lớn nhất trong ba số
}

function handleClickFindMaxNumber() {
  // Ví dụ: Gọi hàm với ba số cụ thể
  let a = 5;
  let b = 10;
  let c = 3;

  let maxNumber = timSoLonNhat(a, b, c); // Tìm số lớn nhất
  alert("Số lớn nhất là: " + maxNumber); // Hiển thị kết quả
}

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result *= result2;
let finalResult = result.toFixed(2);

let finalNumber = parseFloat(finalResult);

result = 5.21;
result2 = 2;

console.log("Final Number:", finalNumber);

var array = [3, -6, 8, -9, -4, 5, 12, -4, 12, -23];

let maxValueNumber = array[0];
let maxIndexNumber = 0;
let newValueInArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    maxValueNumber = array[i];
    maxIndexNumber = i;
    newValueInArray = [i];
  } else if (array[i] === maxValueNumber) {
    maxIndexNumber = i;
    newValueInArray.push(i);
  }
}

if (maxValueNumber !== null) {
  console.log(
    "The numbers is bigger and index in array: ",
    maxValueNumber,
    "New Array have number and index: ",
    newValueInArray
  );
  console.log("Index max in array: ", maxIndexNumber);
} else {
  console.log("Don't have any the number and index big in array");
}

//DOM in JavaScript

// function handleClickChangeText(){
//   var theP = document.getElementById("theP");
//   if(theP.innerHTML === "ReactJS"){
//     return theP.innerHTML = "AngularJS"
//   }else{
//     return theP.innerHTML = "ReactJS"
//   }
// }

function handleClickChangeText() {
  var theP = document.getElementById("theP");
  var randomText = generateRandomText();
  theP.innerHTML = randomText;
}

function generateRandomText() {
  var text = "abcdcnejwncwkccnjcnNCWICNECBWCWECBCECBEUCBWI";
  var randomIndex = Math.floor(Math.random() * text.length);

  return text.substring(randomIndex, randomIndex + 4);
}

function changColorRandom() {
  var background = document.getElementById("background");
  var randomColor = getRandomColor();
  var randomWH = getRandomWidthHeight();
  background.style.backgroundColor = randomColor;
  background.style.width = randomWH.width + "px";
  background.style.height = randomWH.height + "px";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomWidthHeight() {
  return {
    width: Math.floor(Math.random() * 1000),
    height: Math.floor(Math.random() * 1000),
  };
}

// function turnBlack(){
//   var car = document.getElementById("car");
//   car.src = "./img/civicblack-1.jpg"
// }

// function turnRed(){
//   var car = document.getElementById("car");
//   car.src = "./img/civic-1.jpg"
// }

// function handleDisable(){
//   var button =  document.getElementById(`buttonDis`)
//  button.disabled = true

// }

// function handleunDisable(){
//   document.getElementById("buttonDis").disabled = false;
// }

// function handleLogin(){
//   var account = document.getElementById("account");
//   var password = document.getElementById("password");
//   var notification = document.getElementById("notification");
//   if(account.value === "Kien28102003" && password.value === "2003"){
//     notification.style.backgroundColor = "green"
//   } else {
//     notification.style.backgroundColor = "red"
//   }
// }


function handleChangeItem(){
  var list = document.getElementsByTagName("ul")[0];
  var getRanDomText = generateRandomText()
  list.getElementsByTagName("li")[0].innerHTML = getRanDomText
  list.getElementsByTagName("li")[0].style.color = "red"
}

function changeBgColor(){
  var id = document.getElementById("myDiv");
  var colorRand = getRandomColor()
  id.getElementsByTagName("p")[1].style.backgroundColor = colorRand
}

function handleCreateButton(){
  var btn = document.createElement("button");
  btn.innerHTML = "CYBERCLICKS";
  btn.style.backgroundColor = "skyblue"
  document.body.appendChild(btn)
}




//Array Object
const phone = [
  {
    brand: "Apple",
    model: "iPhone 14",
    price: 999,
  },
  {
    brand: "Samsung",
    model: "Galaxy S22",
    price: 799,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    price: 599,
  },
];

let arr34 = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // In ra từng phần tử: 10, 20, 30, 40
}

let arr244 = [10, 20, 30, 40];

for (let index in arr2) {
  console.log(index); // In ra chỉ số: 0, 1, 2, 3
  console.log(arr[index]); // In ra từng phần tử: 10, 20, 30, 40
}

let arr344 = [10, 20, 30, 40];

for (let value of arr3) {
  console.log(value); // In ra từng phần tử: 10, 20, 30, 40
}

const myGirl = ["Name1", "Name2"]
const myBoys = ["Emili", 4]
console.log(myGirl.concat(myBoys))

const newArray2 = ["string", 5, true, {name: "Nguyen Van A"}, function(){console.log("Hello World !!")}]
console.log(newArray2)


//method flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(); // Làm phẳng 1 cấp
console.log(flatArray);//[1, 2, 3, 4, [5, 6]]



const deepNestedArray = [1, [2, 3], [4, [5, 6]]];
const completelyFlatArray = deepNestedArray.flat(2); // Làm phẳng 2 cấp
console.log(completelyFlatArray);//[1, 2, 3, 4, 5, 6]






const trainArray = ["train1", "train2", "train3", "train4", "train5"]
console.log(trainArray);




const array23 = ["1", "2", "3"]
array23.splice(0, 1, "kien", "han")
console.log(array23)


const fruit = ["apple", "orange", "banana"]
fruit.sort((a,b)=>{
  return a - b;
})
console.log(fruit)

const arrs44 = [1,2,3,4]
arrs.forEach(item => {
 return item +=1;
  
})
console.log(arrs)


const arrs = [1,2,3,4]
let arws=arrs.map(item => {
 return item +=1;
  
})
console.log(arws)



// Thêm xóa ptu
let arr = [1, 2, 3];

// Thêm phần tử vào cuối mảng
arr.push(4); // arr = [1, 2, 3, 4]

// Xóa phần tử cuối mảng
arr.pop(); // arr = [1, 2, 3]

// Thêm phần tử vào đầu mảng
arr.unshift(0); // arr = [0, 1, 2, 3]

// Xóa phần tử đầu mảng
arr.shift(); // arr = [1, 2, 3]

// Thêm, xóa, hoặc thay thế phần tử trong mảng
arr.splice(1, 1, 'a'); // arr = [1, 'a', 3]



//Tìm kiếm truy  cập

let arr2 = [1, 2, 3, 4, 2];

// Tìm vị trí của phần tử (lần xuất hiện đầu tiên)
let index = arr.indexOf(2); // index = 1

// Tìm vị trí của phần tử (lần xuất hiện cuối cùng)
let lastIndex = arr.lastIndexOf(2); // lastIndex = 4

// Kiểm tra xem phần tử có tồn tại trong mảng không
let exists = arr.includes(3); // exists = true


//Lọc Ptu

let arr3 = [1, 2, 3, 4];

// Tìm phần tử đầu tiên thỏa mãn điều kiện
let found = arr.find(x => x > 2); // found = 3

// Tìm vị trí phần tử đầu tiên thỏa mãn điều kiện
let foundIndex = arr.findIndex(x => x > 2); // foundIndex = 2

// Lọc các phần tử thỏa mãn điều kiện
let filtered = arr.filter(x => x > 2); // filtered = [3, 4]


//Áp dụng các hàm

let arr4 = [1, 2, 3];

// Áp dụng hàm cho tất cả các phần tử, trả về mảng mới
let mapped = arr.map(x => x * 2); // mapped = [2, 4, 6]

// Giảm mảng thành một giá trị duy nhất
// const sum = arr.reduce((acc, val) => acc + val, 0); // sum = 6

// Giảm mảng từ phần tử cuối cùng
let sumRight = arr.reduceRight((acc, val) => acc + val, 0); // sumRight = 6


//Sắp xếp mã hóa

let array5 = [3, 1, 4, 2];

// Sắp xếp các phần tử trong mảng
array.sort(); // array = [1, 2, 3, 4]

// Đảo ngược thứ tự phần tử trong mảng
array.reverse(); // array = [4, 3, 2, 1]


//Sao chép nối mảng 
let array6 = [1, 2, 3];

// Nối các phần tử thành chuỗi, ngăn cách bằng dấu phẩy
let str = array.join(', '); // str = "1, 2, 3"

// Chuyển đổi mảng thành chuỗi
let toString = array.toString(); // toString = "1,2,3"

// Nối hai hoặc nhiều mảng lại với nhau
let newarray = array.concat([4, 5]); // newarray = [1, 2, 3, 4, 5]

//Lặp qua các ptu

// let array = [1, 2, 3];

// Lặp qua từng phần tử
array.forEach(x => console.log(x)); // In ra 1, 2, 3


//Kiểm tra điều kiện

let arrays = [1, 2, 3, 4];

// Kiểm tra xem tất cả phần tử có thỏa mãn điều kiện
let allGreaterThanZero = array.every(x => x > 0); // true

// Kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện
let someGreaterThanTwo = array.some(x => x > 2); // true





