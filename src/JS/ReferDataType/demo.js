// let a = {name: "Mecedes"}
// a = {name : "BMW", model: "18"}
// const b = a
// console.log(b.name)

let a = 1 // address 01
let b = a; //pointer a = 01

 a = 2
console.log(b);




// const a = {
//     name: "Mercedes"
// }//Address: 001

// const b = a; //Address b pointer to a => 001
// const c = b; //Address c pointer to b => 001
// const d = c; //Address d pointer to c => 001

// b.name = "Kien"
// console.log(a.name);

// c.name = "chang";
// console.log(a.name);

// d.name = "Vy";
// console.log(a.name);


// const a = {
//     name: "Mercedes"
// }//Address: 001

// let a1 = {
//     name: "Kien"
// } //Address 002

// var a2 = {
//     name: "Han"
// } //Address 003

// a2.name = a1
// a1.name = "Lan"
// console.log(a2.name);

// Nếu có nhiều object thì sẽ copy address gần nhất

// const a = {
//     name: "Mercedes"
// }//Address: 001

// let a1 = {
//     name: "Kien"
// } //Address 002

// var a2 = {
//     name: "Han"
// } //Address 003

// a2.name = a1
// console.log(a1.name);


// const array = [1, 2, 3, 4, 5] //address 01
// let arry1 = array;
// arry1[0] = 10
// console.log(array);




// const student = {
//     name: "kien",
//     profile: {
//         firtName: "Pham",
//         lastName: "Duy",
//         introduction: "Male"
//     }
// }

// const student2 = {...student}
// console.log(student2);


const info = {
    name: "abc",
    Age: 18
}

const info1 = info;

info = {
    name:"A"

}

console.log(info);




// const number = 3;
// number = 5;



// console.log(number);


