// Danh sách - Arrays
    // Khai báo / khởi tạo
let arr1 = [];
let students = ['Truong Minh', 'The Chuong', 'Minh Anh', 'Duy Anh', 'Viet Huy', 'Lam Khanh'];    
let numbers = [1, 2, 3, 4, 5];
let mixed = ['apple', 1, true, null, undefined];

    // In ra phần tử tại vị trí số 2
console.log(students[2]);

    // Các phương thức đi kèm
        // Thêm phần tử vào cuối - push()
students.push('Huy Minh');
console.log(students);
        // Thay thế / xóa phần tử 
        // splice(start, deleteCount, newItem)
students.splice(1, 1, 'The Chuonggg');
console.log(students);
        // Tìm index bằng value - indexOf()
console.log(students.indexOf('Minh Anh'))       // 2
console.log(students.indexOf('Duc Trung'))      // -1

    // Duyệt danh sách 
for (let i=0; i < students.length; i++){
    console.log(students[i]);
}


// Đối tượng - object
    // Khai báo / khởi tạo
let person = {
    // cặp key - value
    name: 'Truong Minh',
    age: 69,
    address: 'Ha Noi'
};

    // Truy cập thuộc tính (thông tin)
console.log('Tên: ', person.name);
console.log('Tuổi: ', person['age']);
console.log('Người yêu: ', person.girlfriend);

    // Chỉnh sửa / Thêm thuộc tính
person.name = 'ching chong';
person['job'] = 'developer';
console.log(person);

    // Xóa thuộc tính
delete person.age;
console.log(person);

// Hàm - function
    // Tính diện tích HCN
let w = 5;
let h = 6;
let area = w * h;
console.log('Diện tích HCN:', area);

    // Viết hàm - chương trình con
function areaHCN(width, height){
    return width * height;
}
console.log('Diện tích HCN:', areaHCN(3, 6));
console.log('Diện tích HCN:', areaHCN(4, 8));
console.log('Diện tích HCN:', areaHCN(5, 10));