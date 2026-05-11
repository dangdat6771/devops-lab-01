// object destructuring: lấy dữ liệu từ module calculator.js và gán vào các biến tương ứng
const { add, subtract, multiply, divide } = require("../src/calculator");
// test() là một hàm của Jest để định nghĩa một test case, trong đó "adds" là tên của test case và callback function chứa các câu lệnh kiểm tra
test("adds", () => {
  // expect() là một hàm của Jest để tạo ra một đối tượng "expectation" mà chúng ta có thể sử dụng để kiểm tra giá trị trả về của hàm add() có đúng như mong đợi hay không. toBe() là một matcher của Jest để so sánh giá trị trả về với giá trị mong đợi. Nếu giá trị trả về của add(1, 2) bằng 3, test case sẽ thành công, ngược lại sẽ thất bại.
  expect(add(1, 2)).toBe(3);
});
test("subtracts", () => {
  expect(subtract(5, 3)).toBe(2);
});
test("multiplies", () => {
  expect(multiply(4, 6)).toBe(24);
});
test("divides", () => {
  expect(divide(10, 2)).toBe(5);
});
test("divides by zero", () => {
  // expect() với toThrow() để kiểm tra xem hàm divide() có ném ra lỗi khi chia cho 0 hay không. Nếu hàm divide(10, 0) ném ra lỗi "Cannot divide by zero", test case sẽ thành công, ngược lại sẽ thất bại.
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
