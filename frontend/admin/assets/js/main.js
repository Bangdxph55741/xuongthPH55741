let user = localStorage.getItem("user");
const body = document.querySelector("body");
if (user) {
  user = JSON.parse(user);
  if (user.user.role !== "admin") {
    body.innerHTML = "Bạn không có quyền truy cập";
  }
} else {
  body.innerHTML = "Bạn không có quyền truy cập";
}
