// Variables - Biến số
    // Biến số là nơi để lưu giá trị
    // các cách khai báo: var (cũ), let, const (hằng số)
    // let dùng để khai báo biến, có thể thay đổi
    // const dùng đẻ khia báo hằng số, không đổi

// Data Types - Kiểu dữ liệu
    // 1. Number
    // 2. String: chuỗi / xâu ký tự
    // 3. Boolean: True / False
    // 4. Null: không có giá trị
    // 5. Undefined: không xác định

// Cách hiển thị string truyền tham số
// let name = 'Chuong';
// let age = 14;
// console.log(`${name} hiện đang ${age} tuổi`)

// String Method
let name = 'Bui Duc Trung'
    // length() - độ dài strings
console.log('length:', name.length)
    // trim() - xóa khoảng trắng đầu cuối
console.log('trim:', '  text here  '.trim())
    // split() - tách chuỗi
console.log('split:', name.split(' '))
    // slice(start, end) - cắt chuỗi
console.log('slice:', name.slice(8,13))
    // toUpperCase() - Viết hoa
console.log('toUpperCase:', name.toUpperCase())    
    // toLowerCase() - Viết thường
console.log('toLowerCase:', name.toLowerCase()) 

// ========== Operators ==========
let a = 5;
let b = '5';

console.log(`a = ${a}, b = ${b}`);
console.log('typeof a:', typeof a);
console.log('typeof b:', typeof b);

    // ==: value
console.log('a == b:', a == b);
    // ===: type, value
console.log('a === b:', a === b);

// empty, null, undefined
let c;                          // undefined
let d = null;                   // null
let e = '';                     // empty
console.log('c:', c, typeof c); 
console.log('d:', d, typeof d); 

// ========== Array ==========

// Khai báo 
let arr1 = [];
let arr2 = ['MU', 'Chelsea', 'Liver'];
let arr3 = [1, 2, 6, 9, 8, 7, 3, 4, 5];
console.log('type of arr2:', typeof arr2)

    // Truy cập phần tử theo index
console.log('First element of arr2:', arr2[0])

    // length() - trả về số lượng phần tử
console.log('length:', arr2.length);

    // sort() - sắp xếp
arr3.sort();
console.log('arr3:', arr3);

// ========== if-else statement ==========

let num = 11;
if (num % 2 == 0){
    console.log(num + ' is even');
}else{
    console.log(num + ' is odd');
}

let score = 8;
if (score < 0 || score >10){
    console.log('Invalid score');
}else{
    if (score < 5){
        console.log('Yếu');
    } else if (score < 6.5){
        console.log('Trung bình');
    } else if (score < 8){
        console.log('Khá');
    }else{
        console.log('Tốt');
    };
};

// =========== Break - continue ==========
let arr = ['MU', 'Mancity', 'Liver', 'Chelsea'];

for (let i=0; i < arr.length; i++){
    
    if (arr[i] === 'Liver'){
        console.log('Found it !!!');
        break;          // Thoát khỏi vòng lặp
        // continue;          // Bỏ qua phần còn lại của vòng lặp
    }

    console.log('Check i:', i);
}

// ========== Switch - case ==========
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = '????';
        break;
  }

console.log('Today is', day)

// =========== Scope ===========

// block
for(let i=0; i<5; i++){
    console.log('i =', i);
};

    // global
let i = 0;
while(i < 5){
    console.log('i =', i);
    i++;
};

    // function

// Hàm - chương trình con
function sum2(a, b){
    console.log('Sum:', a+b)
}

const a1 = (a,b) => {
    console.log('Sum:', a+b)
}