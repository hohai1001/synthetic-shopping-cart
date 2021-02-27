import React from "react";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = React.useState(data.products);
  const [size, setSize] = React.useState("");
  const [sort, setSort] = React.useState("");
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
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
