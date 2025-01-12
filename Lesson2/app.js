// Đây là nơi viết code javascript

// Hiển thị ra màn hình
console.log("Hello, World!");
console.log('Đức Trung')

// Variables - Biến số
// Biến số là nơi để lưu giá trị, có thể thay đổi được
let name = 'Duc Trung';
var age = 2;
console.log(name, age);

// Constance - Hằng số
// Hàng số dùng để lưu giá trị, không thay đổi được
const pi = 3.14;
console.log('Số pi:', pi);

// Quy tắc đặt tên biến: camelCase

// Data Types - Kiểu dữ liệu
    // 1. Number: số nguyên + số thập phân
let age2 = 2;
let score = 1.5;

    // 2. String: chuỗi / xâu ký tự
let name2 = 'Lam Khanh';
let message = 'Chuong 123@hihi';

    // 3. Boolean: Đúng - sai
let male = true;
let truongMinh = false;

    // 4. Null: giá trị rỗng
let item = null;
console.log('item:', item);

    // 5. Undefined: chưa xác định
let result;
console.log('result:', result);

// Cộng chuỗi (string)
let str1 = 'Truong';
let str2 = 'Minh';
let str3 = str1.concat(' ', str2);
console.log(str3);  // Truong Minh

// Cộng chuỗi (string) - cách 2
let str4 = str1 + ' ' + str2;
console.log(str4);  // Truong Minh

// Đếm số ký tự trong chuỗi
console.log(str3.length);   // 11

// Truy vấn ký tự trong chuỗi
console.log(str3[7]);

// Chuyển đổi chữ hoa - chữ thường
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
