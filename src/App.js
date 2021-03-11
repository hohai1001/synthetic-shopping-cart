import React from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = React.useState(data.products);
  const [size, setSize] = React.useState("");
  const [sort, setSort] = React.useState("");
  // const [cartItems, setCartItems] = React.useState([]); // khởi tạo này khi refresh sẽ mất sản phẩm trong giỏ hàng
  // sử dụng storage không trách mất sản phẩm trong giỏ hàng khi refresh lại page
  const [cartItems, setCartItems] = React.useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );

  // hàm lọc theo giá tiền
  const sortProducts = (event) => {
    // lấy value khi click vào option trong Order
    setSort(event.target.value);
    // coppy mảng mới
    let newProduct = products;
    // lấy mảng mới đi sắp xếp
    newProduct.sort((a, b) => {
      if (event.target.value === "Lowest") {
        if (a.price > b.price) {
          // xét theo giá tăng dần
          return 1;
        } else return -1;
      } else if (event.target.value === "Highest") {
        if (a.price < b.price) {
          // xét theo giá giảm dần
          return 1;
        } else return -1;
      }
      return 1; // cuối cùng là trường hợp Latest không lọc gì hết. nhận kq theo lần lọc cuối cùng
    });
    setProducts(newProduct);
  };

  // hàm lọc danh sách theo size
  const filterProducts = (event) => {
    if (event.target.value === "") {
      setSize(event.target.value);
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      // coppy mảng mới, và lọc trong data bằng với value nào cho hiển thị những hình đó ra
      if (event.target.value === "ALL") {
        setProducts(data.products);
      } else {
        let newProducts = data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        );
        setProducts(newProducts);
      }
    }
  };

  // hàm thêm sản phẩm vào giỏ hàng
  // biến product khi click sẽ nhận được 1 data chứa các object
  const addToCart = (product) => {
    // sao chép mảng
    const cartItem = cartItems.slice(); // slice là sao chép 1 mảng mới, sau đó lấy mảng mới gán qua cartItem, nó khác với cartItem = cartItems (2 thằng này là 1)
    // đặt cờ hiệu
    let alreadyInCart = false;
    // (lần 1): chạy vòng lặp biến mới sao chép mảng từ state
    // (lần 2): nếu click vào sản phẩm khác thì nó vẫn giống như lần lần chạy 1, còn nếu click vào sản phẩm của lần 1 thì đi vào if trong vào lặp
    cartItem.forEach((item) => {
      // ban đầu carItem sẽ không có gì. khi click vào button add to cart thì product sẽ có một data, lúc này cartItem vẫn chưa có gì (product 1)
      // sau đó đi vào if này so sánh thì id sẽ không bằng nhau (item 1)

      // (lần 2): lần này khi click thì product._id sẽ bằng item._id (vì cartItem đã thêm 1 data vào mảng mà data là data của lần 1 chạy)
      if (item._id === product._id) {
        // (lần 2): lúc này đã có thêm obj count trong mảng, và tăng thêm 1
        item.count++; // item đại diện cho tên object
        // (lần 2): cờ hiệu lúc này đổi thành true
        alreadyInCart = true;
      }
    });
    // (item 1): sau khi loop trên không bằng nhau thì cờ hiệu vẫn là false => vào if này push 1 data vào mảng
    // alreadyInCart === false mới đi vô trong làm

    // (lần 2): cờ hiệu lúc này bằng true, sẽ không đi vào if này
    if (!alreadyInCart) {
      // (item 1): data này sẽ tạo thêm một object count có giá trị là 1 (trường hợp id của item và product không bằng nhau)
      // (lần 1): thêm data mà product nhận được từ cú click thêm vào cartItem
      cartItem.push({ ...product, count: 1 });
    }
    // (lần 1): thêm data vào state (data là data của product)
    // (lần 2): lần này không lấy data của product nữa. chỉ cập nhập count ở trong vòng lặp (data này lần 1 đã thêm, nên chỉ cần cập nhật count)
    setCartItems(cartItem);

    // lưu vào local storage để khi refresh page không bị mất sản phẩm trong giỏ hàng
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  };

  // hàm xóa sản phẩm khỏi giỏ hàng
  // khi click vào remove thì biến product sẽ nhận vào data
  const removeFromCart = (product) => {
    // coppy mảng mới để set chứ không được lấy mảng chính
    const cartItem = cartItems.slice();
    // nếu id product vừa click mà trùng với id cartItem trong giở hàng thì xóa đi. sau đó set lại state
    setCartItems(cartItem.filter((x) => x._id !== product._id));
    localStorage.setItem(
      "cartItem",
      JSON.stringify(cartItem.filter((x) => x._id !== product._id))
    );
  };

  // hàm này show name. biến order nhận từ cart.js là một object
  const createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length} // lấy số lượng hiện tại của mảng data
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart
              createOrder={createOrder}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
