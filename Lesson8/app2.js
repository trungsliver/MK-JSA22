// ======== Async JS - Bất đồng bộ =========
// console.log(1);
// console.log(2);
// setTimeout(() =>{
//     console.log('Run after 3s')
// }, 3000);
// console.log(3);
// console.log(4);

// ========= HTTP Request ========
    // tạo hành động để lấy dữ liệu
    // Keywword: XMLHttpRequest
// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         console.log(request);
//         console.log(request.responseText);
//     }
// };
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// request.send();

// ========= Status Code ==========
//     // Keyword: HTTP status code
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(request);
        console.log(request.responseText);
        console.log('status code:', request.status);
    }
};
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
request.send();


// ========= Callback functions =========
    // Xem trên w3s
// function myDisplayer(some) {
//     console.log('callback, result:', some)
// }
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);

    // Ví dụ 2:
    const callback1 = (error, data) => {
        console.log('Callback function is called');
        if (error){
            console.log('Error:', error);
        }
        if (data){
            console.log('Data:', data);
        }
        
    }
    
// function getTodos(callback){
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             // console.log(request);
//             // console.log(request.responseText);
//             // console.log('status code:', request.status);
//             callback(undefined, request.responseText);
//         }
//         if (this.readyState == 4 && this.status != 200) {
//             callback('Something went wrong', undefined);
//         }
//     };
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//     request.send();
// }

// getTodos(callback1)
    
// =========== JSON data =========
    // Dạng chuẩn giao tiếp giữa server và client (FE và BE)
    // Dạng text (FE), Dạng object (BE)

function getTodos(callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        }
        if (this.readyState == 4 && this.status != 200) {
            callback('Something went wrong', undefined);
        }
    };
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    request.send();
}
    