function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    // nếu b bằng 0, ném ra lỗi để tránh chia cho 0
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
// cú pháp module.exports để xuất các hàm ra ngoài để có thể sử dụng trong các file khác
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
