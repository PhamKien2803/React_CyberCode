//Number
//1
// let num1 = 8;
// let num2 = 4;
// let num3 = 28;
// let num4 = 24;
// let sumResult = num1 + num2;
// let differentResult = num3 - num4
// let finalResult = differentResult * sumResult;
// let evenOddResult = finalResult % 2;

// const section = document.querySelector('section');
// let para1 = document.createElement('p');
// let finalResultCheck = finalResult === 48 ? `Yes well done! `: `No, it is! ${finalResult}`;

// para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`
// let para2 = document.createElement('p')
// let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.' 
// para2.textContent = evenOddResultCheck;

// section.appendChild(para1);
// section.appendChild(para2);


//2
//Kiểm tra số nguyên tố
function isPrime(n){
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true
}

isPrime(3)


//Hàm tìm ước chung lớn nhất
function gdc(a, b) {
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp
    }
    return a;
}

