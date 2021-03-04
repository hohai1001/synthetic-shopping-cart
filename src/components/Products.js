import React from "react";
import PropTypes from "prop-types";
import formatCurrency from "../util";

function Products({ products, addToCart }) {
  // console.log("type of product", products.isArray);
  // let change = JSON.stringify(products);
  // console.log("json", typeof change);
  return (
    <div>
      <ul className="products">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    onClick={() => addToCart(product)}
                    className="button-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
Products.propTypes = {
  products: PropTypes.any,
  addToCart: PropTypes.any,
};

export default Products;
