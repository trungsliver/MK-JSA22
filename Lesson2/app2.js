// Kiểu dữ liệu number
let num1 = 10;          // integer
let num2 = -15;         // negative integer
let num3 = 10.54;       // float
let num4 = -15.65;      // negative float
let num5 = 0xfff;       // hexadecimal
let num6 = 256e-5;      // exponential
let num7 = 0b00100001;  // binary

// Viết dữ liệu lên file .html
document.write(
    num1 + "<br>" +
    num2 + "<br>" +
    num3 + "<br>" +
    num4 + "<br>" +
    num5 + "<br>" +
    num6 + "<br>" +
    num7
);

// Toán tử số học - các phép toán
let x = 10;
let y = 3;

console.log('Phép cộng: ', x + y);      // 13
console.log('Phép trừ: ', x - y);       // 7
console.log('Phép nhân: ', x * y);      // 30
console.log('Phép chia: ', x / y);      // 3.33
console.log('Chia lấy dư: ', x % y);    // 1
console.log('Lũy thừa: ', x ** y);      // 1000

// Toán tử gán cộng - gán trừ
let a = 10;
a += 2;      // Tương đương với: a = a + 2
console.log(a);      // 12

let b = 10;
b -= 2;      // Tương đương với: b = b - 2
console.log(b);      // 8

// Toán tử so sánh - Biểu thức logic
    // So sánh giá trị (= > <)
console.log(5 == 8);        // false
console.log(5 > 8);         // false
console.log(5 <= 8);        // true

    // Phép AND - &&
console.log(true && false);     // false
console.log(true && true);      // true

    // Phép OR - ||
console.log(false || false);    // false
console.log(true || true);      // true

    // Phép NOT - !
console.log(!true);             // false
console.log(!false);            // true