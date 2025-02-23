// Xử lý đăng ký tài khoản

// Nếu đã đăng nhập, chuyển hướng về trang chủ
if (localStorage.getItem('currentUser')){
    location.href = "./index.html";
};

// Lấy phần tử form từ DOM
let form = document.querySelector('form');

// Lắng nghe sự kiện submit của form
form.addEventListener("submit", (e) =>{
    // Ngăn chặn tải lại trang khi gửi form
    e.preventDefault();

    // Lấy thông tin người dùng nhập vào
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // Biểu thức chính quy kiểm tra điều kiện mật khẩu
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    // Kiểm tra điều kiện đăng ký
    if (username.length < 6){
        alert("Tên đăng nhập ít nhất 6 ký tự");
    }else if (password.length < 8){
        alert("Mật khẩu ít nhất 8 ký tự");
    }else if (!password.match(lowerCaseLetter)){
        alert("Mật khẩu phải có ít nhất một ký tự viết thường");
    }else if (!password.match(upperCaseLetter)){
        alert("Mật khẩu phải có ít nhất một ký tự viết hoa");
    }else if(!password.math(numbers)){
        alert("Mật khẩu phải có ít nhất một số");
    }else{
        // Kiểm tra localStorege xem có danh sách user không
        if (localStorage.getItem("user")){
            let users = JSON.parse(localStorage.getItem("users"));

            // Thêm người dùng mới vào danh sách
            users.push({
                email,
                password,
                username,
            });
            localStorage.setItem("users", JSON.stringify(users));
        } else{
            // Tạo danh sách người dùng mới nếu chưa có
            localStorage.setItem(
                "users",
                JSON.stringify([
                    {
                      email,
                      password,
                      username,
                    },
                  ])
            );
        }
        alert("User created successfully, please login"); // Thông báo đăng ký thành công
        location.href = "./login.html"; // Chuyển hướng đến trang đăng nhập
    }
})