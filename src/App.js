import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = React.useState(data.products);
  const [size, setSize] = React.useState("");
  const [sort, setSort] = React.useState("");

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
            <Products products={products} />
          </div>
          <div className="sidebar">cart items</div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
