// DOM: document object model
// là cách mà trình duyệt sử dụng để hiểu và thao tác với object trên file HTML

let p1 = document.getElementById('line1');
    // Lấy nội dung trong đối tượng
let text_p1 = p1.innerHTML;
alert((text_p1));

    // Đổi text trong line2
let p2 = document.getElementById('line2');
p2.innerHTML = 'lêu lêu Trường Minh'

    // Chỉnh CSS cho line3
let p3 = document.getElementById('line3');
p3.style.color = 'red';

    // Chỉnh CSS cho line4
let p4 = document.getElementById('line4');
p4.style.backgroundColor = 'lightblue';

// Bài 1
const form = document.getElementById("form1");
console.log(form.fname.value);
console.log(form.lname.value);
    // Láy ra đầy đủ họ tên:
console.log(form.fname.value + " " + form.lname.value);

// Bài 2
    // Đặt màu nền cho đoạn văn trong Form
form.fname.style.backgroundColor = "lightpink";
form.lname.style.backgroundColor = "lightgreen";

// Bài 3
    //   Đếm và hiển thị các mục danh sách trong màn hình console
let dropdown = document.querySelector("#colorSelect");
console.log(dropdown.length);
for (let i = 0; i < dropdown.length; i++) {
    console.log(dropdown[i].innerText);
}