console.log('Lesson 3');

// // Câu điều kiện (3 dạng)
//     // Dạng thiếu
// let age = 20;
// if (age >= 18) {
//     console.log('Bạn đã đủ 18 tuổi');
// }

//     // Dạng đủ
// let num = 10.2;
// if (num % 2 == 0){
//     console.log(num + ' là số chẵn');
// }
// else{
//     console.log(num + ' là số lẻ');
// }

//     // Dạng đa nhánh
// let score = 10;
// if (0 <= score && score < 5){
//     console.log('Yếu');
// } else if (5 <= score && score < 6.5){
//     console.log('Trung bình');
// } else if (6.5 <= score && score < 8){
//     console.log('Khá');
// } else if (8 <= score && score <= 10){
//     console.log('Giỏi');
// } else{
//     console.log('Nhập sai dữ liệu');
// }

// vòng lặp
    // Vòng lặp for
// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

    // Vòng lặp while
// let i = 1
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

    // Vòng lặp do while
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while( i <= 5);

// Bài 1: Khai báo 2 số nguyên a và b.
// In ra các số nguyên trong khoảng [a, b] nếu b >= a
// In ra các số nguyên trong khoảng [b, a] nếu a > b
// let a = 10;
// let b = 1;
// if (b >= a) {
//     for (let i = a; i <= b; i++){
//         console.log(i);
//     }
// } else{
//     for (let i = b; i <= a; i++){
//         console.log(i);
//     }
// }

// Bài 2
// In bảng cửu chương từ 1 đến 5
// for (let i = 1; i <= 5; i++) {
//     console.log(`Bảng cửu chương ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log('--------------------'); // Ngăn cách giữa các bảng
// }

// Bài 3: In ra các số chẵn trong khoảng [10,20]
// for (let i = 10; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Bài 4: Đếm số lượng số lẻ trong khoảng [5,25]
// let dem = 0;
// for (let i = 5; i <= 25; i++){
//     if (i % 2 != 0) {
//         dem++;
//     }
// }
// console.log('số lượng số lẻ: ' + dem)

// Bài 5: Tính trung bình cộng các số trong khoảng [6,17]
let tong = 0;
let dem = 0;
for (let i = 6; i <= 17; i++){
    tong  = tong + i;
    dem++;
}
tbc = tong / dem
console.log('TBC: ' + tbc)