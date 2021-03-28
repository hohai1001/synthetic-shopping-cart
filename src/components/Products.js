import React from "react";
import PropTypes from "prop-types";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { openView } from "../actions/productAction";

// function Products({ products, addToCart }) {
function Products(props) {
  // console.log("type of product", products.isArray);
  // let change = JSON.stringify(products);
  // console.log("json", typeof change);
  const [product, setProduct] = React.useState(false);
  // const [productts, setProductts] = React.useState("");

  // React.useEffect(() => {
  //   fetchProducts();
  // }, []);

  const openModal = (product) => {
    setProduct({ product });
  };
  const closeModal = () => {
    setProduct(false);
  };
  const productt = product.product;
  // const productt = props.getStatusView;

  console.log("productt", productt);
  return (
    <div>
      <Fade bottom cascade={true}>
        {!props.products ? (
          <div className="products">Loading...</div>
        ) : (
          // <ul className="products">
          //   {products &&
          //     products.length > 0 &&
          //     products.map((product) => (
          //       <li key={product._id}>
          //         <div className="product">
          //           <a onClick={() => openModal(product)} href="#/">
          //             <img src={product.image} alt={product.title}></img>
          //             <p>{product.title}</p>
          //           </a>
          //           <div className="product-price">
          //             <div>{formatCurrency(product.price)}</div>
          //             <button
          //               onClick={() => addToCart(product)}
          //               className="button-primary"
          //             >
          //               Add to cart
          //             </button>
          //           </div>
          //         </div>
          //       </li>
          //     ))}
          // </ul>
          <ul className="products">
            {props.products &&
              props.products.length > 0 &&
              props.products.map((product) => (
                <li key={product.id}>
                  <div className="product">
                    <a onClick={() => openModal(product)} href="#/">
                      <img src={product.image} alt={product.name}></img>
                      <p>{product.name}</p>
                    </a>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        // onClick={() => addToCart(product)}
                        className="button-primary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </Fade>
      {productt && (
        <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img src={productt.image} alt={productt.name}></img>
              <div className="product-details-description">
                <p>
                  <strong>{productt.name}</strong>
                </p>
                <p>{productt.startingPlace}</p>
                <p>
                  Time start: {productt.timeStart}&emsp;Time end:{" "}
                  {productt.timeEnd}
                </p>
                <p>
                  Available size:{" "}
                  {productt.availableSizes.map((x, idx) => (
                    <span key={idx.toString()}>
                      {" "}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>$ {productt.price}</div>
                  <button
                    className="button-primary"
                    onClick={() => {
                      // addToCart(productt);
                      closeModal();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
}
Products.propTypes = {
  products: PropTypes.any,
  addToCart: PropTypes.any,
};

const mapStateToProps = (state) => ({
  getStatusView: state.productReducer.root,
  openView: state.productReducer.openView,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openView: () => dispatch(openView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

// export default Products;
