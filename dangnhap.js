const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Sau khi người dùng đăng ký thành công, lưu trạng thái vào sessionStorage
sessionStorage.setItem("justRegistered", "true");

// Chuyển hướng về trang chính
window.location.href = "index.html";
// Sau khi người dùng đăng nhập thành công
sessionStorage.setItem("userLoggedIn", "true");

// Nếu trước đó là đăng ký thì redirect về trang chủ
if (sessionStorage.getItem("justRegistered") === "true") {
    window.location.href = "index.html";
}

