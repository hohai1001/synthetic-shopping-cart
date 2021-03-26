danh sách các nhánh làm theo tuần tự

1. feature-one
2. product-component
3. filter-component
4. cart-component
5. checkout-form
6. animation-modal
   - npm install react-reveal (package animation của react)
   - npm install react-modal ()
7. products-backend
   - npm install nodemon (khi thay đổi đoạn code phải khởi động lại server qua lệnh "node app.js" để server nhận code mới. với nodemon thì không cần làm điều đó nữa, server tự động làm)
   - npm install express body-parser mongoose shortid 
      + express: là frameword của nodejs
      + body-parser: Đây là một lớp trung gian node.js để xử lí JSON, dự liệu thô, text và mã hóa URL
      + mongoose: Mongoose là một công cụ mô hình hoá đối tượng cho MongoDB và Node.js
      + shortid: lấy luôn id của database bạn vừa mới thêm vào
8. add-redux-products
   - npm install redux react-redux redux-thunk
      + react-redux: giúp quản lý state dễ hơn
      + react-thunk: action trong redux thường trả về dạng object (plain javascript object), trong trường hợp muốn gọi api để trả về một list trending thì action trả về không thể là một object được. mà phải trả về một function, action như vậy gọi là async action, redux-thunk sẽ giúp ta làm điều này